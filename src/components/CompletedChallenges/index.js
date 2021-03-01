import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/CompletedChallenges.module.css';



export const CompletedChallengs = () => {

  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.CompletedChallengsContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}