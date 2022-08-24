import React from "react";
import Avatar from "../avatar/Avatar";
import classes from "./chatCard.module.scss";

const ChatCard = ({ props }) => {
  return (
    <div className={classes.wrapper}>
      <Avatar props={props.avatar} />
      <div className={classes.name_message}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.message}>{props.messagesHistory.at(-1).text}</div>
      </div>
      <div className={classes.time}>{props.messagesHistory.at(-1).time}</div>
    </div>
  );
};

export default ChatCard;
