import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getUserInfo, postLogin } from "../service/auth.service";

const H3 = styled.h3`
    margin: 0px
`

const FlexRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    column-gap: 10px;
    
    padding-right: 20px
`

const Input = styled.input`
    height: 20px;
    border: none;
    border-radius: 6px;
`

const LoginForm = ({ dispatch }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const payload = {
            email: email,
            password: password,
        }
        await postLogin(payload)
        dispatch({
            type: "LOGIN",
            data: {
                user_id: getUserInfo().user_id || ""
            }
        })
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <FlexRow>
                    <H3>Email</H3>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <H3>Password</H3>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" />
                </FlexRow>
            </form>
        </div>
    );
}

export default connect()(LoginForm);