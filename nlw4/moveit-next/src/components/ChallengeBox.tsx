import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {
    // const contextData = useContext(ChallengesContext);
    // console.log(contextData);
    const { activeChallenge } = useContext(ChallengesContext);
    // const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            {/* { hasActiveChallenge ? ( */}
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    {/* <header>Ganhe 400 xp</header> */}
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        {/* <img src="icons/body.svg" alt=""/> */}
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        {/* <p>Levante e faça uma caminhada de 3 minutos.</p> */}
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}