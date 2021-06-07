import { connect } from "react-redux";
import styled from "styled-components";
import { postLogout } from "../service/auth.service";
import LoginForm from "./LoginForm";

const H2 = styled.div`
    margin: 0px;
    font-weight: bold;
    font-size: 20px;
`

const FlexRow = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    align-items: center;

    color: white;
    background-color: #4285f4;

    padding: 0px 20px 0px 20px;

    height: 50px;
`

const LogoutMenu = styled(FlexRow)`
    column-gap: 10px;
`

const Navbar = ({user_id, dispatch}) => {

    const handleLogout = async (event) => {
        await postLogout()
        dispatch({
            type: "LOGOUT"
        })
    }

    if(user_id==="")
    return (
        <FlexRow className="navbar-guest">
            <H2>TODO List</H2>
            <div>
                <LoginForm />
            </div>
        </FlexRow>
    );
    else return (
        <FlexRow className="navbar-guest">
            <H2>TODO List</H2>
            <LogoutMenu>
                <H2>User ID: {user_id}</H2>
                <button onClick={handleLogout}>Logout</button>
            </LogoutMenu>
        </FlexRow>
    )
}

const mapStateToProps = (state) => {
    return {
      ...state
    }
  }

export default connect(mapStateToProps)(Navbar)