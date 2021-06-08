import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logout } from "../redux/user/actions";
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

const Navbar = () => {

    const user_id = useSelector(state => state.user.user_id)
    const dispatch = useDispatch()

    const handleLogout = () => dispatch(logout())

    if (user_id) return (
        <FlexRow className="navbar-guest">
            <H2>TODO List</H2>
            <LogoutMenu>
                <H2>User ID: {user_id}</H2>
                <button onClick={handleLogout}>Logout</button>
            </LogoutMenu>
        </FlexRow>
    )
    else return (
        <FlexRow className="navbar-guest">
            <H2>TODO List</H2>
            <div>
                <LoginForm />
            </div>
        </FlexRow>
    )
}

export default Navbar