import React, { useContext } from "react";
import ChatCard from "../../common/chatCard/ChatCard";
import classes from "./chatsList.module.scss";
import { Context } from "../../..";

const ChatsList = () => {
  const { store } = useContext(Context);

  return (
    <div className={classes.chatsList}>
      {store.data.map((user) => (
        <ChatCard props={user} key={user.id} />
      ))}
    </div>
  );
};

export default ChatsList;
