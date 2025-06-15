import { roles } from "./user.types"


// se usa para manejar el estado de auth en la sesion
export type authPayloadType = {
    token: string,
    user: {
        userName: string,
        role: roles
    }
}


// export type authLoginType = {
//     message: string,
//     data: authPayloadType
// }

export type userLoginCredentialsType = {
    userName: string;
    password: string
}
