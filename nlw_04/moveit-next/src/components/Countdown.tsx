// import { useState, useEffect } from "react";
// import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

// let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    // const contextData = useContext(ChallengesContext);
    // console.log(contextData);

    // const { startNewChallenge } = useContext(ChallengesContext);

    // const [time, setTime] = useState(0.1 * 60);
    // const [time, setTime] = useState(25 * 60);
    // const [isActive, setIsActive] = useState(false);
    // const [hasFinished, setHasFinished] = useState(false);

    // const minutes = Math.floor(time / 60);
    // const seconds = time % 60;

    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

    // function startCountdown() {
    //     setIsActive(true);
    // }

    // function resetCountdown() {
    //     clearTimeout(countdownTimeout);
    //     setIsActive(false);
    //     setTime(0.1 * 60);
    //     // setTime(25 * 60);
    // }
    
    // useEffect(() => {
    //     if(isActive && time > 0) {
    //         // setTimeout(() => {
    //         countdownTimeout = setTimeout(() => {
    //             setTime(time - 1);
    //         }, 1000)
    //     } else if (isActive && time === 0) {
    //         // console.log("finalizou");
    //         setHasFinished(true);
    //         setIsActive(false);
    //         startNewChallenge();
    //     }
    // }, [isActive, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {/* { hasFinished ? (
                <p>Terminou</p>
            ) : null } */}
            {/* or */}
            {/* { hasFinished && (
                // <p>Terminou</p>
                <button 
                disabled
                className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) } */}
            { hasFinished ? (
                // <p>Terminou</p>
                <button 
                disabled
                className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                // <div>
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                        {/* Iniciar um ciclo */}
                        {/* { isActive ? "Abandonar ciclo" : "Iniciar um ciclo" } */}
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </button>
                    ) }
                </>
                // </div>

            ) }

        </div>
    );
}