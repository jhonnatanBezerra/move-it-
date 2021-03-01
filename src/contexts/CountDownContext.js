import { createContext, useContext, useEffect, useState } from "react"
import { ChallengesContext } from "./ChallengesContext";

export const CountDownContext = createContext({});

let countdownTimeout;

export const CountDownProvider = ({ children }) => {

  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(60 * 0.1)
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

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
    setHasFinish(false);
    setTime(60 * 0.1);
  }


  return (
    <CountDownContext.Provider value={{
      minutes,
      seconds,
      hasFinish,
      isActive,
      startCountDown,
      resetCountDown
    }}>
      {children}
    </CountDownContext.Provider>
  )

}