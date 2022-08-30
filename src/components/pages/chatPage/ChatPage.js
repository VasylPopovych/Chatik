import React from "react";
import ChatBoard from "../../chatBoard/ChatBoard";
import Sidebar from "../../sidebar/Sidebar";
import classes from "./chatPage.module.scss";

const ChatPage = () => {
  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <ChatBoard />
    </div>
  );
};

export default ChatPage;
