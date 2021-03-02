import { createContext, useEffect, useState } from 'react';
import { LevelUpModal } from '../components/LevelUpModal';
import Cookies from 'js-cookie'
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({});


export const ChallengesProvider = ({ children, lvl, experience, totalChallenges }) => {

  console.log(experience);

  const [level, setLevel] = useState(lvl ?? 0);
  const [currentExperience, setCurrentExperience] = useState(experience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(totalChallenges ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToLevelUp = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();

  }, []);

  /* Para salvar os Cookies é necessario a instalação da lib
  js-cookeis
  */
  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
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
        completedChallenge,
        closeLevelUpModal
      }}>


      {children}

      { isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )


}