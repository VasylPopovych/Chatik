import React from "react";
import classes from "./message.module.scss";
import Avatar from "../avatar/Avatar";
import { observer } from "mobx-react-lite";

const Message = ({ props, avatar }) => {
  const getDateFormat = (time) => {
    let date = time.toLocaleDateString();
    let formatedTime = time.toLocaleTimeString().slice(-11, -6) + time.toLocaleTimeString().slice(-3);
    return date + ", " + formatedTime;
  };
  return (
    <div className={classes.wrapper}>
      <Avatar props={avatar} />
      <div className={classes.body}>
        <div className={classes.text}>{props.text}</div>
        <div className={classes.time}>{getDateFormat(props.time)}</div>
      </div>
    </div>
  );
};

export default observer(Message);
