import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
import "./Sidebarchat.css";

export default function Sidebarchat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 100));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter the room name!!");

    if (roomName) {
      //something from database
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar_chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar_chat_info">
          <h2>{name}</h2>
          <p>Last message..</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebar_chat">
      <h2>Add new Chat</h2>
    </div>
  );
}
