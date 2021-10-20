import axios from "axios";
import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";

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
            },
        });

//      const response = await axios.get("https://api.github.com/user", {
        const response = await axios.get<IUserResponse>(
            "https://api.github.com/user", 
            {
                headers: {
                    authorization: `Bearer ${accessTokenResponse.access_token}`
                }
            }
        );

        const { login, id, avatar_url, name } = response.data;

     // const user = await prismaClient.user.findFirst({
        let   user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }
        })

        if(!user) {
            user = await prismaClient.user.create({
                data: {
                    github_id: id,
                    login,
                    avatar_url,
                    name
                }
            })
        }

        const token = sign(
            // 1st parameter
            {
                user: {
                    name: user.name,
                    avatar_url: user.avatar_url,
                    id: user.id
                }
            },

            // 2nd parameter
         // "12345679"
      // // or
      // // TIP: use some like "MD5 Hash Generator" (e.g. http://www.md5.cz/)
            process.env.JWT_SECRET,

            // 3rd parameter
            {
                subject: user.id,
                expiresIn: "1d"
            }

        )

    //  return response.data;
        return { token, user };

    }
}

export { AuthenticateUserService }