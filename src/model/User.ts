export interface User {
    username: string
    senha: string
    email: string
}

export class UserModel {
    username: string
    senha: string
    email: string

    constructor(username: string, senha: string, email: string) {
        this.username = username
        this.senha = senha
        this.email = email
    }
}