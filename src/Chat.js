import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useState } from "react";
import { useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
function Chat() {
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      user: user,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Type your message here"
          />
          <button
            onClick={sendMessage}
            className="chat__inputButton"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
