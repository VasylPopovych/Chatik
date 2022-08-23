import React from "react";
import Avatar from "../avatar/Avatar";
import classes from "./chatCard.module.scss";

const ChatCard = () => {
  return (
    <div className={classes.chatCard}>
      <Avatar />
      ChatCard
    </div>
  );
};

export default ChatCard;
