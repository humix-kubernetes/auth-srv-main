import { UserModel } from "../model/User"

export class AuthService {

    static async register(username: string, senha: string, email: string): Promise<string | null> {
        
        return `username: ${username}`
    }

}