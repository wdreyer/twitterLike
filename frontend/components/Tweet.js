import styles from '../styles/Tweet.module.css';

function Tweet() {
  return (
    <div className={styles.tweetComponen}>
    <Image width='50px'  height='50px' src='/profil.png'/>
    <div className={styles.firstname}>John</div>
      <div className={styles.username}>@JohnCena</div>
      <div className={styles.time}>5 hours</div>
      <div className={styles.time}></div>
    </div>
  );
}
export default Tweet;

