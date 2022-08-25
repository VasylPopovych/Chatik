import React from "react";
import classes from "./verificationIcon.module.scss";
import verificationIcon from "../../../assets/verificationIcon.jpg";

const VerificationIcon = () => {
  return (
    <div className={classes.wrapper}>
      <img src={verificationIcon} alt="verification_icon" />
    </div>
  );
};

export default VerificationIcon;
