import { useEffect } from "react";
import { VscGithubInverted } from "react-icons/vsc"

import { api } from "../../services/api";

import styles from "./styles.module.scss";

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

export function LoginBox() {
 // const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${}&redirect_uri=http://localhost:3000`
 // client_id = GitHub > Settings > Developer settings > OAuth Apps > "oauth_app_name" > Client ID
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=5dae87ac752ec4f86765`

    useEffect(() => {
        const url = window.location.href;
        const hasGitHubCode = url.includes("?code=");

        async function signIn(gitHubCode: string) {
            const response = await api.post<AuthResponse>("authenticate", {
                code: gitHubCode,
            })

            const { token, user } = response.data;

            localStorage.setItem("@dowhile:token", token);

            console.log(user);
            
        }

        if (hasGitHubCode) {
            const [urlWithoutCode, gitHubCode] = url.split("?code=");

            // console.log({ urlWithoutCode, gitHubCode});
            // limpar URL
            window.history.pushState({}, "", urlWithoutCode);

            signIn(gitHubCode);
        }
    }, [])

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signWithGithubButton}>
                <VscGithubInverted size="24" />
                Entrar com GitHub
            </a>
        </div>
    )
}