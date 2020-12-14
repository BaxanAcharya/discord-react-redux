import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
function Login() {
  const login = () => {
    auth.signInWithPopup(provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg"
          alt="logo"
          height="200px"
        />
      </div>
      <Button onClick={login}>Login</Button>
    </div>
  );
}

export default Login;
