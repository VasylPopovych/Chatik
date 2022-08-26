import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./avatar.module.scss";
import VerificationIcon from "../verificationIcon/VerificationIcon";

const Avatar = ({ props, isVerified }) => {
  if (isVerified) {
    return (
      <div className={classes.avatar_wrapper}>
        <VerificationIcon />
        <img src={props} alt="user_avatar" />
      </div>
    );
  }
  return (
    <div className={classes.avatar_wrapper}>
      <img src={props} alt="user_avatar" />
    </div>
  );
};

export default observer(Avatar);
