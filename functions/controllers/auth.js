import { UserModel } from "../models/users.js";
import { encryptPass, checkPass } from "../utils/handlePassword.js";
import { firmarToken } from "../utils/handleJWT.js";
import { handleError } from "../utils/handleError.js";
import { handleResponse } from "../utils/handleResponse.js";

// Loguear un usuario
const loginUser = async (req, res) => {
    try {
        const { user, password } = req.body;

        const foundUser = await UserModel.findOne({ user }).select("user role password");

        if (!foundUser) {
            return handleError(res, "El usuario no existe", 404);
        }

        const isValidPassword = await checkPass(password, foundUser.password);

        if (!isValidPassword) {
            return handleError(res, "El password ingresado no es válido", 401);
        }

        const { password: _, ...safeUser } = foundUser.toObject();

        const authPayload = {
            token: firmarToken(safeUser),
            user: safeUser,
        };

        handleResponse(res, 200, "El usuario se logueó correctamente", authPayload);
    } catch (error) {
        handleError(res, "Error al realizar el login");
    }
};

// Registrar un usuario
const registerUser = async (req, res) => {
    try {
        const { user, password, role } = req.body;

        const hashedPassword = await encryptPass(password);

        const createdUser = await UserModel.create({
            user,
            password: hashedPassword,
            role,
        });

        const { password: _, ...plainUser } = createdUser.toObject();

        const authPayload = {
            token: firmarToken(plainUser),
            user: plainUser,
        };

        handleResponse(res, 200, "Se registró un nuevo usuario", authPayload);
    } catch (error) {
        handleError(res, "Error al registrar al usuario");
    }
};

export const authController = {
    loginUser,
    registerUser,
};
