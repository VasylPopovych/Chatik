import React, { useState, useContext, useEffect } from "react";
import classes from "./messageInput.module.scss";
import { Context } from "../../../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { store } = useContext(Context);

  const sendNewMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    store.addNewMessage(message);
    store.addNewMessageFromAPI();
    setMessage("");
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.input_wrapper}>
        <form>
          <input
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className={classes.input}
          />
          <button onClick={sendNewMessage} className={classes.icon}>
            <FontAwesomeIcon icon={faPaperPlane} size="lg" color="grey" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;
