import classes from "./chatBoard.module.scss";
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
