import React from "react";
import classes from "./../Dialogs.module.css";

const Message = props => {
  return (
    <div className={classes.mcontainer}>
      <div
        className={`${classes.message} ${
          props.usr ? classes.messageRight : classes.messageLeft
        }`}>
        {!props.usr && <img src={props.avatar} alt="alt" />}
        {props.message}
        {props.usr && <img src={props.avatar} alt="alt" />}
      </div>
    </div>
  );
};

export default Message;
