import React from "react";
import ChatCard from "../../common/chatCard/ChatCard";
import classes from "./chatsList.module.scss";

const ChatsList = () => {
  return (
    <div className={classes.chatsList}>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </div>
  );
};

export default ChatsList;
