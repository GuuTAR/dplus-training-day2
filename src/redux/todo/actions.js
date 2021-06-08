import { deleteTodo, getTodos, postAddTodo, putUpdataTodo } from '../../service/todo.service'
import * as TYPES from './types'

export const getTodoLists = () => async dispatch => {
    dispatch({type: TYPES.GET_TODO_REQ})

    try {
        const result = await getTodos()
        dispatch({ type: TYPES.GET_TODO_SUCCESS, payload: {todos: result.data}})
    } catch (error) {
        dispatch({ type: TYPES.GET_TODO_FAIL, payload: {error} })
    }
}

export const addTodo = (payload) => async dispatch => {
    dispatch({type: TYPES.ADD_TODO_REQ})

    try {
        await postAddTodo(payload)
        dispatch({ type: TYPES.ADD_TODO_SUCCESS, payload: payload})
    } catch (error) {
        dispatch({ type: TYPES.ADD_TODO_FAIL, payload: {error} })
    }

}

export const updateTodo = (id, payload) => async dispatch => {
    dispatch({type: TYPES.EDIT_TODO_REQ})
    try {
        await putUpdataTodo(id, payload)
        dispatch({ type: TYPES.EDIT_TODO_SUCCESS, payload: {id, todo: payload}})
    } catch (error) {
        dispatch({ type: TYPES.EDIT_TODO_FAIL, payload: {error} })
    }
}

export const deleteTodos = (id) => async dispatch => {
    dispatch({type: TYPES.DELETE_TODO_REQ})

    try {
        await deleteTodo(id)
        dispatch({ type: TYPES.DELETE_TODO_SUCCESS, payload: {id}})
    } catch (error) {
        dispatch({ type: TYPES.DELETE_TODO_FAIL, payload: {error} })
    }
}
