import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
      <div className={styles.completedChallengesContainer}>
          <span>Desafios completos</span>
          {/* <span>5</span> */}
          <span>{challengesCompleted}</span>
      </div>  
    );
}