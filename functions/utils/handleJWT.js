import jsonwebtoken from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

// Firmar un token 
export const firmarToken = (userName) =>{
    const tokenFirmado = jsonwebtoken.sign(
        {
            _id: userName._id,
            role: userName.role
        },
        JWT_SECRET,
        {
            expiresIn: "8h"
        }
    )
    return tokenFirmado
}


// Verificar la validez de un token 
export const verificarToken = (token) =>{
    try {
        const validToken = jsonwebtoken.verify(token, JWT_SECRET)
        return validToken
    } catch (error) {
        return false
    }
}