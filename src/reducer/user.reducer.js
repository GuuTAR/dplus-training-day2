import { getUserInfo } from "../service/auth.service"

const initialState = {
    user_id: getUserInfo().user_id || "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user_id: action.data.user_id,
            }
        case 'LOGOUT':
            return {
                ...state,
                user_id: "",
            }
        default:
            return state
    }
}

export default userReducer