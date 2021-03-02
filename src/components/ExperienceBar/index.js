import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/ExperienceBar.module.css';

export const ExperienceBar = () => {

  const { currentExperience, experienceToLevelUp } = useContext(ChallengesContext);

  console.log(experienceToLevelUp);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToLevelUp;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToLevelUp} xp</span>
    </header>
  );
}