import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./authPage.module.scss";
import chat_logo from "../../../assets/chat_logo.jpg";
import { Context } from "../../..";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { observer } from "mobx-react-lite";

const AuthPage = () => {
  const { firebaseAuth } = useContext(Context);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const loginGoogle = () => {
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginGuest = () => {
    localStorage.setItem("logedAsGuest", "true");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.popUp}>
        <img src={chat_logo} alt="logo" />
        <div className={classes.login_button} onClick={loginGuest}>
          Login as Guest
        </div>
        <div className={classes.login_button} onClick={loginGoogle}>
          Login with Google
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
