import React, { useContext, useRef, useState } from "react";
import { Context } from "../../..";
import classes from "./messagesBox.module.scss";
import Message from "../../common/message/Message";
import { observer } from "mobx-react-lite";
import ChatBoardHeader from "../chatBoardHeader/ChatBoardHeader";

const MessagesBox = () => {
  const { store } = useContext(Context);

  if (store.selectedChat === 0) {
    return (
      <div className={classes.wrapper_empty_chat}>
        <h1>Select a chat to start messaging</h1>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <ChatBoardHeader props={store.selectedChatData[0]} />
      <div className={classes.messagesBox}>
        {store.selectedChatData[0].messagesHistory.map((message) => (
          <Message props={message} avatar={store.selectedChatData[0].avatar} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default observer(MessagesBox);
