import { handleError } from "../utils/handleError.js"



export const checkRole = (role) => (req, res, next) =>{
    try {
        const { userName } = req
        const rolesByUser = userName.role

        const checkValidRole = role.some((singleRole) => rolesByUser.includes(singleRole))

        if (!checkValidRole) {
            return res.status(403).json({error: "El usuario no tiene los permisos para realizar la petición"})
        }

        next()
    } catch (error) {
        handleError(error, res, "Error al realizar la verificación de roles", 500)
    }
}