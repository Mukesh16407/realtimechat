import React from "react";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Messages } from "./Messages";
import { Input } from "./Input";
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="other-user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="image"
          />
          <span>Jony</span>
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
