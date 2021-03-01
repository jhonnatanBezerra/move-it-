import styles from '../../styles/components/Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.ProfileContainer}>
      <img src="https://github.com/jhonnatanBezerra.png" alt="Jhonnatan Bezerra" />
      <div>
        <strong>Jhonnatan Bezerra</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}