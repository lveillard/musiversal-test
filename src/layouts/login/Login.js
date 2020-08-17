import React, { useState } from "react";
import { auth, fb } from "fb";
import { useHistory } from "react-router-dom";

import "./Login.css";

const handleSignUp = async (e, email, password) => {
  e.preventDefault();
  if (email && password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }
  } else {
    alert("Missing email or password");
  }
};

// in the future we would need more information, not only email and password
const handleSignIn = async (e, email, password) => {
  e.preventDefault();
  if (email && password) {
    try {
      auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      alert(err.message);
    }
  } else {
    alert("Missing email or password");
  }
};

const Login = () => {
  // this helps us to update the route once we log
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // this function will create a googleAuth provider
  const signInWithGoogle = async () => {
    try {
      const provider = new fb.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      history.replace("/app"); // if it worked, then go to the main app route
      console.log(result);
    } catch (err) {
      // not handling errors, just printing them now
      console.log(err);
    }
  };

  return (
    <div className="login">
      <header className="login-header">
        <h1>Login window</h1>
        <div className="sign-data">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password name"
            />
          </div>
        </div>

        <div className="Sign-buttons">
          <button
            style={{ background: "#427ef7" }}
            onClick={async (e) => handleSignUp(e, email, password)}
          >
            Sign up
          </button>
          <button
            style={{ background: "#faffb1" }}
            onClick={async (e) => handleSignIn(e, email, password)}
          >
            Sign In
          </button>{" "}
        </div>
        <br />
        <b> or </b>
        <br />
        <button onClick={async () => signInWithGoogle()}>
          Sign in/up with Google
        </button>
        <button disabled>Sign in/up with Facebook (disabled) </button>
      </header>
    </div>
  );
};

export default Login;
