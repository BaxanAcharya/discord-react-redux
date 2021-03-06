import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Message.css";
function Message({ timestamp, user, message }) {
  const userLogged = useSelector(selectUser);
  return (
    <div
      className={`message ${
        userLogged.email === user.email && "message__bodyReciverMessage"
      }`}
    >
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
