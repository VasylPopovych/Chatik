import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import classes from "./messagesBox.module.scss";
import Message from "../../common/message/Message";
import { observer } from "mobx-react-lite";
import ChatBoardHeader from "../chatBoardHeader/ChatBoardHeader";

const MessagesBox = () => {
  const { store } = useContext(Context);
  const [selectedUserId, setSelectedUserId] = useState(store.selectedUser);
  const selectedUsedData = store.data.filter((user) => user.id === selectedUserId);

  useEffect(() => {
    setSelectedUserId(store.selectedUser);
  }, [store.selectedUser]);

  return (
    <div className={classes.wrapper}>
      <ChatBoardHeader props={selectedUsedData[0]} />
      <div className={classes.messagesBox}>
        {selectedUsedData[0].messagesHistory.map((message) => (
          <Message props={message} avatar={selectedUsedData[0].avatar} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default observer(MessagesBox);
