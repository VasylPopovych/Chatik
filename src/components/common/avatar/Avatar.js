import React, { useContext } from "react";
import classes from "./avatar.module.scss";

const Avatar = ({ props }) => {
  console.log(props);

  return (
    <div className={classes.avatar_wrapper}>
      <img src={props} alt="user_avatar" />
    </div>
  );
};

export default Avatar;
