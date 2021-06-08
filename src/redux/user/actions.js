import { postLogin, postLogout } from '../../service/auth.service'
import * as TYPES from './types'

export const login = (payload) => async dispatch => {
    dispatch({type: TYPES.LOGIN_REQ})
    try {
        await postLogin(payload)
        dispatch({type: TYPES.LOGIN_SUCCESS})
    } catch (error) {
        dispatch({type: TYPES.LOGIN_FAIL, payload: error})
    }
}

export const logout = () => async dispatch => {
    dispatch({type: TYPES.LOGOUT_REQ})
    try {
        await postLogout()
        dispatch({type: TYPES.LOGOUT_SUCCESS})
    } catch (error) {
        dispatch({type: TYPES.LOGOUT_FAIL, payload: error})
    }
}