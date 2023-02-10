import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import Trends from './Trends';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Home() {
const[tweet,setTweet] = useState("");
const[lengthTweet,setLengthTweet] = useState(0);

  return (
    <div>
      <main className={styles.main}>
      <div className={styles.leftSide}>
      <div className={styles.logo}></div>
      <div className={styles.loginGroup}>
      <div className={styles.subgroup}>
      <Image width='50px'  height='50px' src='/profil.png'/>
      <div className={styles.names}>
      <div className={styles.firstname}>John</div>
      <div className={styles.username}>@JohnCena</div>
      </div>
      </div>
      <button className={styles.logout} > Logout</button>
      
      </div>
      </div>   
      <div className={styles.centerSide}>
      Home
      <div className={styles.postTweet}>
      <textarea className={styles.whats} placeholder="What's up?" onChange={(e) => {
        setTweet(e.target.value);
        setLengthTweet(e.target.value.length);
      }} value={tweet}/>      <div className={styles.count}>{lengthTweet}/280
      <button onClick={() => setTweet()} className={styles.tweetBtn}>Tweet</button>
      </div>
      </div> 

      </div>
      <div className={styles.rightSide}>
      <Trends/>
      </div>

      </main>
   
    </div>
  );
}

export default Home;
