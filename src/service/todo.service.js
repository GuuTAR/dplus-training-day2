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

