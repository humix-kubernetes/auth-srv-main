import { Request, Response } from 'express'
import { AuthService } from '../services/authService'

export class AuthController {

    static async register(req: Request, res: Response): Promise<void>{
        const { username, senha, email } = req.body


        const response = AuthService.register(username, senha, email)
        res.status(200).json({response})
    }

}