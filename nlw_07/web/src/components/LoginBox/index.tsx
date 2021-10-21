import styles from "./styles.module.scss";

export function LoginBox() {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href="#" className={styles.signWithGithubButton}>
                Entrar com GitHub
            </a>
        </div>
    )
}