import React from "react";
import Avatar from "../../common/avatar/Avatar";
import classes from "./chatBoardHeader.module.scss";

const ChatBoardHeader = ({ props }) => {
  return (
    <div className={classes.wrapper}>
      <Avatar props={props.avatar} isVerified={true} />
      <div className={classes.name}>{props.name}</div>
    </div>
  );
};

export default ChatBoardHeader;
