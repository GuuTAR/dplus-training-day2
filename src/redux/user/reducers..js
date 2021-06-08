import { getUserInfo } from '../../service/auth.service'
import * as TYPES from './types'

const initialState = {
    user_id: getUserInfo().user_id,
    loading: false,
    error: "",
}

export const userReducer = (state = initialState, { type, payload = { } }) => {
    switch (type) {
        case TYPES.LOGIN_REQ:
            return {...state, loading: true}
        case TYPES.LOGIN_SUCCESS:
            return {...state, user_id: getUserInfo().user_id, loading: false}
        case TYPES.LOGIN_FAIL:
            return {...state, error: payload.error , loading: false}
        case TYPES.LOGOUT_REQ:
            return {...state, loading: true}
        case TYPES.LOGOUT_SUCCESS:
            return {...state, user_id: "" , loading: false}
        case TYPES.LOGOUT_FAIL:
            return {...state, error: payload.error , loading: false}
        default:
            return state
    }
}