import styles from '../styles/SignIn.module.css';
import { useEffect, useState } from 'react';


function SignUp(props) {
const [userName,setUserName] = useState("")
const [password,setPassword] = useState("")

const { close } = props;



  return (
    <div className={styles.main}>
    <div onClick={() => close()} className={styles.close}>X</div>    
    <div className={styles.logo}></div>
    <div className = {styles.join}>Connect to Hackatweet 
    </div>
    <input placeholder="Username" onChange={(e) => setUserName(e.target.value)} className={styles.input} value={userName}/>
    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} className={styles.input} value={password}/>
    <button onClick={() => setSignUp()} className={styles.SignIn}>Sign in</button>
    </div>
  );
}

export default SignUp;