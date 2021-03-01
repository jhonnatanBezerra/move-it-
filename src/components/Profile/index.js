import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css';

export const Profile = () => {


  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.ProfileContainer}>
      <img src="https://github.com/jhonnatanBezerra.png" alt="Jhonnatan Bezerra" />
      <div>
        <strong>Jhonnatan Bezerra</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}