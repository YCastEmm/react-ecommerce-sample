import { authResponseType } from "@/types/response.types"
import { userLoginCredentialsType } from "@/types/auth.types"

export const postLogin = async (user: userLoginCredentialsType) : Promise<authResponseType>=>{

    const response = await fetch("https://us-central1-staging-manualesx-28-1e29c.cloudfunctions.net/api/auth/login",
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: user.userName,
                password: user.password
            })
        })

    if (!response.ok) {
        const { errorMessage } = await response.json()
        throw {errorMessage};
    }

    const data = await response.json()
    return data
}