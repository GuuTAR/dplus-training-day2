import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/user/actions";

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

const LoginForm = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const payload = {
            email: email,
            password: password,
        }

        dispatch(login(payload))
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

export default LoginForm;