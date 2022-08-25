import { observer } from "mobx-react-lite";
import React from "react";
import classes from "./avatar.module.scss";

const Avatar = ({ props }) => {
  return (
    <div className={classes.avatar_wrapper}>
      <img src={props} alt="user_avatar" />
    </div>
  );
};

export default observer(Avatar);
