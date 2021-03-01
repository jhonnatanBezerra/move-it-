import styles from '../../styles/components/ChallengeBox.module.css';


export const ChallengeBox = () => {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="/icons/body.svg" alt="body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <button
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