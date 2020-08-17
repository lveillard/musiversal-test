import React from "react";
import { auth, fb } from "fb";
import { useHistory } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const history = useHistory();

  const signInWithGoogle = async () => {
    try {
      const provider = new fb.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      history.replace("/app");

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <header className="login-header">
        <b>Login window</b>
        <button
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
          onClick={async () => signInWithGoogle()}
        >
          Sign in/up with Google
        </button>
      </header>
    </div>
  );
};

export default Login;
