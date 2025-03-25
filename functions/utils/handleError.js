/**
 * Manejador de errores
 * @param {Object} res
 * @param {string} message
 * @param {number} errorCode (por default: 500)
 */
export const handleError = (res, message, errorCode = 500) => {
    res.status(errorCode).json({ error: message });
};
