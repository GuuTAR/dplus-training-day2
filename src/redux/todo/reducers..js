import * as TYPES from './types'

const initialState = {
    todos: [],
    loading: false,
    error: "",
}

export const todoReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case TYPES.GET_TODO_REQ:
            return {...state, loading: true}
        case TYPES.GET_TODO_SUCCESS:
            return {...state, loading: false, todos: payload.todos}
        case TYPES.GET_TODO_FAIL:
            return {...state, loading: false, error: payload.error}
        case TYPES.ADD_TODO_REQ:
            return {...state, loading: true}
        case TYPES.ADD_TODO_SUCCESS:
            return {...state, loading: false, todos: [...state.todos, payload] }
        case TYPES.ADD_TODO_FAIL:
            return {...state, loading: false, error: payload.error}
        case TYPES.EDIT_TODO_REQ:
            return {...state, loading: true}
        case TYPES.EDIT_TODO_SUCCESS:
            return {
                ...state, 
                loading: false, 
                todos: state.todos.map(todo => todo._id === payload.id ? payload.todo : todo)}
        case TYPES.EDIT_TODO_FAIL:
            return {...state, loading: false, error: payload.error}
        case TYPES.DELETE_TODO_REQ:
            return {...state, loading: true}
        case TYPES.DELETE_TODO_SUCCESS:
            return {
                ...state, 
                loading: false, 
                todos: state.todos.filter(todo => todo._id !== payload.id)}
        case TYPES.DELETE_TODO_FAIL:
            return {...state, loading: false, error: payload.error}
        default:
            return state
    }
}