import jwt from 'jsonwebtoken'

export async function getDataFromToken(request) {
    try {
        const token = request.cookies.get("token").value || ""
        const decodedToken = jwt.verify(token, process.env.SECRET)
        return decodedToken.id
    } catch (err) {
        throw new Error(err.message)
    }
}