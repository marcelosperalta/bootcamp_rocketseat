import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img 
                src="https://avatars.githubusercontent.com/u/8503067?s=460&u=1781a04f212ec71e05adce4761a1cee785e3fdde&v=4" 
                alt="Marcelo Peralta"
            />
            <div>
                <strong>Marcelo Peralta</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}