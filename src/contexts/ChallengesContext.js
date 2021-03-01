import { createContext, useState } from 'react';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({});

export const ChallengesProvider = ({ children }) => {

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(50);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToLevelUp = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChalleng = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChalleng];

    setActiveChallenge(challenge);

  }

  function resetChelleng() {
    setActiveChallenge(null);
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
        resetChelleng
      }}>


      {children}
    </ChallengesContext.Provider>
  )


}