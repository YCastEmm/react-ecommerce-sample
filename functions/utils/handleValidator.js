import { validationResult } from "express-validator";

/**
 * Valida los resultados de express-validator y devuelve errores si existen.
 */
export const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw(); // Tira un error si hay validaciones invalidas
        return next();
    } catch (error) {
        return res.status(400).json({ errors: error.array() });
    }
};
