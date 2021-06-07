const header = {
    "Content-Type": "application/json",
}

export const getTodos = async () => {
    try {
        const result = await fetch(`no_auth/todos/`, {
            method: "GET",
            headers: header
        })
        return result.json()
    }
    catch(error) {
        console.error(error)
    }
} 

export const postAddTodo = async (data) => {
    try {
        const result = await fetch(`no_auth/todos/`, {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        })
        return result.json()
    }
    catch(error) {
        console.error(error)
    }
} 

export const putUpdataTodo = async (id, data) => {
    try {
        const result = await fetch(`no_auth/todos/${id}`, {
            method: "PUT",
            headers: header,
            body: JSON.stringify(data)
        })
        return result.json()
    }
    catch(error) {
        console.error(error)
    }
} 

export const deleteTodo = async (id) => {
    try {
        const result = await fetch(`no_auth/todos/${id}`, {
            method: "DELETE",
            headers: header,
        })
        return result.json()
    } 
    catch (error) {
        console.log(error)
    }
}

// Private
export const postAddTodoAuth = async (data) => {
    try {
        const result = await fetch(`with_auth/todos/`, {
            method: "POST",
            headers: {
                ...header,
                Authorization: `Bearer ${sessionStorage.getItem("user_token")}`
            },
            body: JSON.stringify(data)
        })
        return result.json()
    }
    catch(error) {
        console.error(error)
    }
} 

export const putUpdataTodoAuth = async (id, data) => {
    try {
        const result = await fetch(`with_auth/todos/${id}`, {
            method: "PUT",
            headers: {
                ...header,
                Authorization: `Bearer ${sessionStorage.getItem("user_token")}`
            },
            body: JSON.stringify(data)
        })
        return result.json()
    }
    catch(error) {
        console.error(error)
    }
} 

export const deleteTodoAuth = async (id) => {
    try {
        const result = await fetch(`with_auth/todos/${id}`, {
            method: "DELETE",
            headers: {
                ...header,
                Authorization: `Bearer ${sessionStorage.getItem("user_token")}`
            },
        })
        return result.json()
    } 
    catch (error) {
        console.log(error)
    }
}

