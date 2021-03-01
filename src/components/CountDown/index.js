import { useContext } from 'react';
import { CountDownContext } from '../../contexts/CountDownContext';
import styles from '../../styles/components/CountDown.module.css';

export const CountDown = () => {

  const { minutes, seconds, hasFinish, isActive, startCountDown, resetCountDown } = useContext(CountDownContext);

  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');


  function handleChallengeSucceeded() {

  }

  function handleChallengeFailed() {

  }


  return (
    <>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRigth}</span>
        </div>
      </div>

      {hasFinish ? (
        <button
          disabled
          type="button"
          className={styles.countDownButton}>
          Ciclo encerrado
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                onClick={resetCountDown}
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
                Abandonar ciclo
              </button>
            ) : (
                <button
                  type="button"
                  onClick={startCountDown}
                  className={styles.countDownButton}>
                  Iniciar um ciclo
                </button>
              )}
          </>
        )}



    </>
  )
}