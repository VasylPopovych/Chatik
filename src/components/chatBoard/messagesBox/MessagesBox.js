import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import classes from "./messagesBox.module.scss";
import Message from "../../common/message/Message";
import { observer } from "mobx-react-lite";
import ChatBoardHeader from "../chatBoardHeader/ChatBoardHeader";

const MessagesBox = () => {
  const { store } = useContext(Context);
  const [selectedChatId, setSelectedUserId] = useState(store.selectedChat);
  const selectedChatData = store.data.filter((user) => user.id === selectedChatId);

  useEffect(() => {
    setSelectedUserId(store.selectedChat);
    console.log(`selected another user, with id: ${store.selectedChat}`);
  }, [store.selectedChat]);

  return (
    <div className={classes.wrapper}>
      <ChatBoardHeader props={selectedChatData[0]} />
      <div className={classes.messagesBox}>
        {selectedChatData[0].messagesHistory.map((message) => (
          <Message props={message} avatar={selectedChatData[0].avatar} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default observer(MessagesBox);
