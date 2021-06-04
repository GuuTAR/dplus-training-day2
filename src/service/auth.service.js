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
        const result =  (await fetch("/login", {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        })).json()
        sessionStorage.setItem("user_token", result.data.token)
    }
    catch(error) {
        console.error(error)
    }
}
