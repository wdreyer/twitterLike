import styles from '../styles/Login.module.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useEffect, useState } from 'react';


function Login() {
  const [signup, setSignUp] = useState(false);

  function closeSignUp() {
    setSignUp(false);
    
  }
  

  const [signin, setSignIn] = useState(false);

  function closeSignIn() {
    setSignIn(false);
  }


  

  return (
    <div className={styles.container}>
    <div className={styles.mainLogin}>
    <div className={styles.contentLogin}>
    <div className={styles.logo}>
    </div>
    <div className = {styles.seeWhat}>
    See whats happening
    </div>
    <div className = {styles.join}>
    Join Hackatweet today.
    </div>
    { signup && <SignUp close={closeSignUp} /> }
    <button onClick={() => setSignUp(true)}   className={styles.SignUp}>Sign up</button>
    Already have an account ?
    { signin && <SignIn close={closeSignIn} /> }
    <button onClick={() => setSignIn(true)} className={styles.SignIn}>Sign in</button>
    </div>   
    </div>
    </div>
  );
}

export default Login;

// <SignIn/>
// <SignUp/>
