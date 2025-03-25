/**
 * Manejador de respuestas
 * @param {Object} res 
 * @param {Number} status 
 * @param {String} message
 * @param {Object} data 
 */
export const handleResponse = (res, statusCode, message, data) =>{
    res.status(statusCode).json({message, data})
}