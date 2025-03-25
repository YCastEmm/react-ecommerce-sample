import {UserModel} from '../models/users.js'
import { encryptPass, checkPass } from "../utils/handlePassword.js";
import  {firmarToken}  from "../utils/handleJWT.js";
import { handleError } from "../utils/handleError.js";
import { handleResponse } from "../utils/handleResponse.js";


const loginUser = async (req, res) =>{
    try {
        const user = UserModel.findOne({user: req.user}).select("user role password")

        if(!user) {
            handleError(res, "El usuario no existe", 404);    
        }

        const encryptedPass = user.password
        const checkedPass = await checkPass(req.user.password, encryptedPass)

        if (!checkedPass) {
            handleError(res, "El password ingresado no es válido no existe", 401);    
        }

        user.password = undefined 

        const authPayload = {
            token: signToken(user),
            user
        }

        handleResponse(res, 200, "El usuario se logueó correctamente", authPayload)

    } catch (error) {
        handleError(res, "Error al realizar el login");
    }
}