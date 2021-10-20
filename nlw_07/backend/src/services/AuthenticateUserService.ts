import axios from "axios";

// Flow
// - Receber "code(string)"
// - Recuperar o "access_token" no GitHub
// - Verifcar se o usuário existe no DB
//   - if TRUE  = Gera um token
//   - if FALSE = Cria no DB, gera um token
// - Retornar o toke com as infos do user

class AuthenticateUserService {
    
    async execute(code: string) {

        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })

        return response.data;

    }
}

export { AuthenticateUserService }