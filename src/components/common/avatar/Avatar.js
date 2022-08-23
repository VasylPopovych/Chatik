import React from "react";
import classes from "./avatar.module.scss";
import user1 from "../../../assets/user1.jpg";

const Avatar = () => {
  return (
    <div className={classes.avatar_wrapper}>
      <img src={user1} alt="user_avatar" />
    </div>
  );
};

export default Avatar;
