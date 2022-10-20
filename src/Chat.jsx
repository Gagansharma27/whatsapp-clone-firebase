import {
  Call,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";

export default function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setinput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setinput("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 100));
  }, []);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }

    console.log(roomId);
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_header_info">
          <h3>{roomName}</h3>
          <p>Last seen at</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <Call />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Gagan Sharma</span>
          hello there
          <span className="chat_timestamp">chat_timestamp</span>
        </p>

        <p className={`chat_message ${true && "chat_receiver"}`}>
          <span className="chat_name">Gagan Sharma</span>
          hello there
          <span className="chat_timestamp">chat_timestamp</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage}>Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
