import React from "react";
import "./ChatHeader.css";
import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import { HelpRounded, SearchRounded, SendRounded } from "@material-ui/icons";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRounded />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
}

export default ChatHeader;
