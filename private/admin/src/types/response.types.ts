import { userType } from "./user.types"


export type responseType = {
    message: string,
    data: object,
    user: userType
}

export type authResponseType = {
    message: string,
    data:   {
                token: string
            },
    user: userType
}

export type errorResponseType = {
    errorMessage: string,
}