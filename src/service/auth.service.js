import jwt_decode from 'jwt-decode'

const header = {
    "Content-Type": "application/json",
}

export const postRegister = async (data) => {
    try {
        const result = await fetch("auth/register", {
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

export const postLogin = async (data) => {
    try {
        const result = await (await fetch("auth/login", {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        })).json()
        sessionStorage.setItem("user_token", result.token)
    }
    catch(error) {
        console.error(error)
    }
}

export const postLogout = async () => {
    try {
        const result = await fetch("auth/logout", {
            method: "POST",
            headers: {
                ...header,
                Authorization: `Bearer ${sessionStorage.getItem("user_token")}`
            },
        })
        sessionStorage.removeItem("user_token")
        return result.json()
    }
    catch(error) {
        console.error(error)
    }
}

export const getUserInfo = () => {
    try {
        const token = sessionStorage.getItem('user_token')
        const user_info = jwt_decode(token)
        return user_info
    } catch (error) {
        return error
    }
}
