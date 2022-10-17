import { Call, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Chat.css'

export default function Chat() {
    const [seed,setSeed] = useState("");

useEffect(()=>{
    setSeed(Math.floor(Math.random()*100));
},[]);


  return (
    <div className='chat'>
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat_header_info">
                <h3>Room Name</h3>
                <p>Last seen at</p>
            </div>
            <div className="chat_header_right">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <Call/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            <p className="chat_message">
            <span className='chat_name'>Gagan Sharma</span>
                hello there
            <span className="chat_timestamp">chat_timestamp</span>
                
            </p>
            
            <p className={`chat_message ${true && 'chat_receiver'}`}>
            <span className='chat_name'>Gagan Sharma</span>
                hello there
            <span className="chat_timestamp">chat_timestamp</span>
                
            </p>
        </div>
        <div className="chat_footer">

        </div>


    </div>
  )
}
