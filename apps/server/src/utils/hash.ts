import bcrypt from "bcrypt"

export async function hashToken(token: string){
    return await bcrypt.hash(token, 10)
}