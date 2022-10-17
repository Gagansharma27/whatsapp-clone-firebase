import {
  Chat,
  DonutLargeSharp,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import Sidebarchat from "./Sidebarchat";


export default function Sidebar() {
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
        <Sidebarchat/>
        <Sidebarchat/>
        <Sidebarchat/>
       

      </div>
    </div>
  );
}
