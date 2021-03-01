import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountDownContext } from '../../contexts/CountDownContext';
import styles from '../../styles/components/ChallengeBox.module.css';


export const ChallengeBox = () => {

  const { activeChallenge, resetChelleng, completedChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountDownContext);



  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChelleng();
    resetCountDown();
  }


  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`/icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              onClick={handleChallengeFailed}
              className={styles.challengeFailedButton}
              type="button">
              Falhei
            </button>

            <button
              onClick={handleChallengeSucceeded}
              className={styles.challengeSucceededButton}
              type="button">
              Completei
            </button>

          </footer>

        </div>
      ) : (<div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para receber desafios a serem completados
      </strong>
        <p>
          <img src="icons/level-up.svg" alt="lvl up" />
          Complete-os e ganhe experiência e avance de level.</p>
      </div>)}

    </div>
  )
}