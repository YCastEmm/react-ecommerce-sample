import { handleError } from "../utils/handleError.js"
import { verificarToken } from "../utils/handleJWT.js"
import { UserModel } from "../models/users.js";


export const authMiddleware = async (req, res, next) =>{
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({error: "Acceso denegado. Esta ruta requiere de un token de autorización"})
        }

        const token = req.headers.authorization.split(" ").pop()

        const verifiedToken = verificarToken(token)

        if (!verifiedToken._id) {
            return res.status(401).json({error: "Token inválido. No se encontró el _id en el verifiedToken"})
        }

        const userName = await UserModel.findById(verifiedToken._id)
        req.userName = userName // Le agrego el userName a la petición para usarlo luego

        next()

    } catch (error) {
        handleError(error, res, "Error en el authMiddleware", 500)
    }
}