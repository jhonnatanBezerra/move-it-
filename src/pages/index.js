import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallengs } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContext';

import styles from '../styles/pages/Home.module.css';


export default function Home(props) {

  console.log(props);

  return (
    <ChallengesProvider
      level={props.level}
      experience={props.currentExperience}
      chalengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move-It</title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallengs />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;


  return {
    props: {
      level,
      currentExperience,
      challengesCompleted
    }
  }
} 