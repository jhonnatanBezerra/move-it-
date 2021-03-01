import { createContext, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({});

export const ChallengesProvider = ({ children }) => {

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToLevelUp = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();

  }, [])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChalleng = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChalleng];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}XP!`
      });
    }

  }

  function resetChelleng() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToLevelUp) {
      finalExperience = finalExperience - experienceToLevelUp;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    resetChelleng();
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToLevelUp,
        levelUp,
        startNewChallenge,
        resetChelleng,
        completedChallenge
      }}>


      {children}
    </ChallengesContext.Provider>
  )


}