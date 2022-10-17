import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './Sidebarchat.css';

export default function Sidebarchat({addNewChat}) {

    const [seed,setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*100));
    },[]);

    const createChat =() =>{
        const roomName = prompt("Enter the room name!!");

        if(roomName){
            //something from database
        }
    }


  return !addNewChat ? (
    <div className='sidebar_chat'>
     <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
    <div className="sidebar_chat_info">
        <h2>Room name</h2>
        <p>Last message..</p>
    </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebar_chat'>
     <h2>Add new Chat</h2>
    </div>
  )
}
