import React from "react";
import classes from "./chatBoard.module.scss";
import ChatBoardHeader from "./chatBoardHeader/ChatBoardHeader";
import MessageInput from "./messageInput/MessageInput";
import MessagesBox from "./messagesBox/MessagesBox";

const ChatBoard = () => {
  return (
    <main className={classes.chatBoard}>
      <MessagesBox />
      <MessageInput />
    </main>
  );
};

export default ChatBoard;
