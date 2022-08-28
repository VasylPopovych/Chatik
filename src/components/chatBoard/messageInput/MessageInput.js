import React, { useState, useContext, useEffect } from "react";
import classes from "./messageInput.module.scss";
import { Context } from "../../../";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { store } = useContext(Context);

  const sendNewMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    store.addNewMessage(message);
    store.addNewMessageFromAPI();
    setMessage("");
    console.log(message);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.input_wrapper}>
        <form>
          <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className={classes.input} />
          <button onClick={sendNewMessage} className={classes.icon}>
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;
