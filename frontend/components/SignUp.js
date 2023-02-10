import styles from "../styles/SignUp.module.css";
import { useEffect, useState } from "react";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [userName, setUsertName] = useState("");
  const [password, setPassword] = useState("");

  const { close } = props;

  const handleSignUp = () => {
    const iduser = {
      username: userName,
      firstname: firstName,
      password: password,
    };
    console.log(iduser);
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(iduser),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data.result);
        if (data.result) {
          window.location.assign("/home");
        }
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.close} onClick={close}>
        X
      </div>
      <div className={styles.logo}></div>
      <div className={styles.join}>Create your Hackatweet account</div>
      <input
        placeholder="Firstname"
        onChange={(e) => setFirstName(e.target.value)}
        className={styles.input}
        value={firstName}
      />
      <input
        placeholder="Username"
        onChange={(e) => setUsertName(e.target.value)}
        className={styles.input}
        value={userName}
      />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        value={password}
      />
      <button onClick={() => handleSignUp()} className={styles.SignUp}>
        Sign up
      </button>
    </div>
  );
}

export default SignUp;
