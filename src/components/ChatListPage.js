import React from 'react'
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import { useState } from 'react';

function ChatListPage() {
  const [openChat, setOpenChat] = useState(0)
  return (
    <div style={{ background: "url('/bkgd.jpeg')", backgroundSize: "cover", display: "flex", flexDirection: "column", height: "100vh" }} className="ChatListPage">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1 style={{fontSize: "3em", color: "white", letterSpacing: "2px"}}>TigerHelp</h1>
      </div>
      <div style={{padding: "5%", height: "90vh", display: "flex", flexDirection: "row"}}>
          <ChatList setOpenChat={setOpenChat}></ChatList>
          <ChatRoom openChat={openChat}></ChatRoom>
        </div>
    </div>
  )
}

export default ChatListPage