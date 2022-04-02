import React from 'react'
import ChatCard from './ChatCard'

const chats = [
    {
        id: 0, 
        name: "Squad", 
        preview: "tree824: Yeah man I know exactly what you mean. That happened to me last year.",
        img: "profile.png"
    
    }, 
    {
        id: 1,
        name: "Struggle Bus", 
        preview: "pond425: We're rooting for you- ur doing gr8!",
        img: "profile1.png"
    },
    {
        id: 2, 
        name: "Staying Strong", 
        preview: "polar2220: that made my day, thanks for sharing! im actually so encouraged :)",
        img: "frog.jpeg"
    },
    {
        id: 3, 
        name: "The Fam", 
        preview: "juggler2232: woahhh that's so cool man! i wish i could do that!!",
        img: "download.jpeg"
    },
    {
        id: 4, 
        name: "Club", 
        preview: "spikel33: yeah, I'd appreciate accountability with that^^",
        img: "dog.jpeg"
    },
    {
        id: 5, 
        name: "Day Ones", 
        preview: "bear2041: *sigh* it's been a really tough week guys :(",
        img: "egg.png"
    }
]
function ChatList(props) {
  return (
      <div style={{ flex: "0.5", display: "flex", flexDirection: "column"}}> 
      {
       chats.map(chat => <ChatCard setOpenChat={props.setOpenChat} chat={chat}></ChatCard>)
      }
      </div>
  )
}

export default ChatList