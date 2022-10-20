import {
  Chat,
  DonutLargeSharp,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "./firebase";

import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLargeSharp />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_search_container">
          <SearchOutlined />
          <input placeholder="Search or new Chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <Sidebarchat addNewChat />
       {rooms.map(room =>(
        <Sidebarchat key={room.id} id = {room.id} name = {room.data.name}/>
       ))}
      </div>
    </div>
  );
}
