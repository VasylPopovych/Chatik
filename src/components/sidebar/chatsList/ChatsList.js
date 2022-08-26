import React, { useContext, useEffect } from "react";
import ChatCard from "../../common/chatCard/ChatCard";
import classes from "./chatsList.module.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const ChatsList = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    store.data.sort((a, b) => b.messagesHistory.at(-1).time.getTime() - a.messagesHistory.at(-1).time.getTime());
  }, [store.data.messagesHistory]);

  return (
    <div className={classes.chatsList}>
      {store.data.map((user) => (
        <ChatCard props={user} key={user.id} />
      ))}
    </div>
  );
};

export default observer(ChatsList);
