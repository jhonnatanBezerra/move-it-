import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/ChallengeBox.module.css';


export const ChallengeBox = () => {

  const { activeChallenge, resetChelleng } = useContext(ChallengesContext);


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
              onClick={resetChelleng}
              className={styles.challengeFailedButton}
              type="button">
              Falhei
            </button>

            <button
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