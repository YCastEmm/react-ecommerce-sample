

export enum roles {
    admin = "admin",
    guest = "guest",
    user = "user"
}


export type userType = {
    _id: string,
    userName: string
    role: roles
}