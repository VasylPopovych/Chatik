import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import classes from "./messagesBox.module.scss";
import Message from "../../common/message/Message";
import { observer } from "mobx-react-lite";

const MessagesBox = () => {
  const { store } = useContext(Context);
  const [selectedUserId, setSelectedUserId] = useState(store.selectedUser);
  const selectedUsedData = store.data.filter((user) => user.id === selectedUserId);

  useEffect(() => {
    setSelectedUserId(store.selectedUser);
  }, [store.selectedUser]);

  return (
    <div className={classes.messagesBox}>
      {selectedUsedData[0].messagesHistory.map((message) => (
        <Message props={message} avatar={selectedUsedData[0].avatar} key={message.id} />
      ))}
    </div>
  );
};

export default observer(MessagesBox);
