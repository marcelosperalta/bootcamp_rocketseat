import { VscGithubInverted } from "react-icons/vsc"

import styles from "./styles.module.scss";

export function LoginBox() {
 // const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${}&redirect_uri=http://localhost:3000`
 // client_id = GitHub > Settings > Developer settings > OAuth Apps > "oauth_app_name" > Client ID
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=5dae87ac752ec4f86765`

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