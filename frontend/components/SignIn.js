import styles from '../styles/SignIn.module.css';
import { useEffect, useState } from 'react';


function SignUp(props) {
const [userName,setUserName] = useState("")
const [password,setPassword] = useState("")
const [firstName, setFirstName] = useState("")

const { close } = props;

const handleSignIn = () => {
  fetch("http://localhost:3000/users/signIn", {
    method: "POST", 
    headers: {"Content-Type": "application/json"},
    body : JSON.stringify(user)
    .then(response => response.json({username : userName, firstname : firstName, password : password}))
    .then(data => {
      if (data.result){
        window.location.assign("/Home")
      }
    })
  })
}



  return (
    <div className={styles.main}>
    <div onClick={() => close()} className={styles.close}>X</div>    
    <div className={styles.logo}></div>
    <div className = {styles.join}>Connect to Hackatweet 
    </div>
    <input placeholder="Username" onChange={(e) => setUserName(e.target.value)} className={styles.input} value={userName}/>
    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} className={styles.input} value={password}/>
    <button onClick={() => handleSignIn()} className={styles.SignIn}>Sign in</button>
    </div>
  );
}

export default SignUp;