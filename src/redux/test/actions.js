import * as TYPES from './types'

export const increment = (number) => dispatch => {
    dispatch({type: TYPES.INCREMENT_REQ})
    dispatch({type: TYPES.INCREMENT_SUCCESS, payload: {diff: number}})
}

export const decrement = (number) => dispatch => {
    dispatch({type: TYPES.DECREMENT_REQ})
    dispatch({type: TYPES.DECREMENT_SUCCESS, payload: {diff: number}})
}

export const fetchAPI = (url) => async dispatch => {
    dispatch({ type: TYPES.API_REQ})

    const header = {
        "Content-Type": "application/json",
    }

    try {
        const result = await (await fetch(url, {
            method: "GET",
            headers: header,
        })).json()
        dispatch({ type: TYPES.API_SUCCESS, payload: result})
    } catch (error) {
        dispatch({ type: TYPES.API_FAIL })
    }
}