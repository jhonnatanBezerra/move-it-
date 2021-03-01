import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/CountDown.module.css';

let countdownTimeout;

export const CountDown = () => {

  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(60 * 0.1)
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');


  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinish(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(60 * 0.1);
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