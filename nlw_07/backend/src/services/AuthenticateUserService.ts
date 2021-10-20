import axios from "axios";

// Flow
// - Receber "code(string)"
// - Recuperar o "access_token" no GitHub
// - Recuperar infos do user no GitHub
// - Verifcar se o usuário existe no DB
//   - if TRUE  = Gera um token
//   - if FALSE = Cria no DB, gera um token
// - Retornar o token com as infos do user

interface IAccessTokenResponse {
    access_token: string
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}

class AuthenticateUserService {
    
    async execute(code: string) {

        const url = "https://github.com/login/oauth/access_token";

//      const response = await axios.post(url, null, {
        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })

//      const response = await axios.get("https://api.github.com/user", {
        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })

        return response.data;

    }
}

export { AuthenticateUserService }