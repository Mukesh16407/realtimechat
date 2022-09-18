import React, { useContext } from "react";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "../context/ChatContext";


export const Chat = () => {

  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="other-user">
          <img
            src={data.user?.photoURL}alt="chat"/>
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <VideocamOutlinedIcon />
          <CallOutlinedIcon />
          <MoreHorizOutlinedIcon />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};
