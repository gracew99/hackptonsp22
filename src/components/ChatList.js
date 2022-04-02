import React from 'react'
import ChatCard from './ChatCard'

function ChatList(props) {
  return (
      <div style={{ flex: "0.5", display: "flex", flexDirection: "column"}}> 
      {
       props.chats.map(chat => <ChatCard accountId={props.accountId} setLink={props.setLink} setOpenChat={props.setOpenChat} chat={chat}></ChatCard>)
      }
      </div>
  )
}

export default ChatList