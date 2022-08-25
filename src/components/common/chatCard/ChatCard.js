import React, { useContext } from "react";
import Avatar from "../avatar/Avatar";
import classes from "./chatCard.module.scss";
import { Context } from "../../..";

const ChatCard = ({ props }) => {
  const { store } = useContext(Context);
  const getSelectedUser = () => {
    store.setSelectedUser(props.id);
  };

  return (
    <div onClick={getSelectedUser} className={classes.wrapper}>
      <Avatar props={props.avatar} isVerified={true} />
      <div className={classes.name_message}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.message}>{props.messagesHistory.at(-1).text}</div>
      </div>
      <div className={classes.time}>{props.messagesHistory.at(-1).time}</div>
    </div>
  );
};

export default ChatCard;
