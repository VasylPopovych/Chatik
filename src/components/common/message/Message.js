import React from "react";
import classes from "./message.module.scss";
import Avatar from "../avatar/Avatar";
import { observer } from "mobx-react-lite";

const Message = ({ props, avatar }) => {
  return (
    <div className={classes.wrapper}>
      <Avatar props={avatar} />
      <div className={classes.body}>
        <div className={classes.text}>{props.text}</div>
        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  );
};

export default observer(Message);
