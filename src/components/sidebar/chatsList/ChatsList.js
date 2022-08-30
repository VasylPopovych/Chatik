import React, { useContext, useEffect } from "react";
import ChatCard from "../../common/chatCard/ChatCard";
import classes from "./chatsList.module.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const ChatsList = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    store.sortingChats();
  }, []);

  return (
    <div className={classes.wrapper}>
      {store.data.map((chat) => (
        <ChatCard props={chat} key={chat.id} />
      ))}
    </div>
  );
};

export default observer(ChatsList);
