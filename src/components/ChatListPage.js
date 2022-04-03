import React from 'react'
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const chats = [
  {
      id: 0, 
      name: "Squad", 
      preview: "tree824: Yeah man I know exactly what you mean. That happened to me last year.",
      img: "/profile.png",
      containerId: 1492884,
      recipientId: 1581170,
      recipientItemId: 1584080,
      recipientId1: 1581082,
      recipientItemId1: 1583993,
  
  }, 
  {
      id: 1,
      name: "Struggle Bus", 
      preview: "pond425: We're rooting for you- ur doing gr8!",
      img: "/profile1.png",
      containerId: 1492725,
      recipientId: 1581087,
      recipientItemId: 1583998,
      recipientId1: 1581081,
      recipientItemId1: 1583992,
  },
  {
      id: 2, 
      name: "Staying Strong", 
      preview: "polar2220: that made my day, thanks for sharing! im actually so encouraged :)",
      img: "/frog.jpeg",
      containerId: 1492726,
      recipientId: 1581088,
      recipientItemId: 1583999,
      recipientId1: 1581080,
      recipientItemId1: 1583991
  },
  {
      id: 3, 
      name: "The Fam", 
      preview: "juggler2232: woahhh that's so cool man! i wish i could do that!!",
      img: "/download.jpeg"
  },
  {
      id: 4, 
      name: "Club", 
      preview: "spikel33: yeah, I'd appreciate accountability with that^^",
      img: "/dog.jpeg"
  },
  {
      id: 5, 
      name: "Day Ones", 
      preview: "bear2041: *sigh* it's been a really tough week guys :(",
      img: "/egg.png"
  }
]

const chats1 = [
  {
      id: 0, 
      name: "Squad", 
      preview: "tree824: Yeah man I know exactly what you mean. That happened to me last year.",
      img: "/profile.png",
      containerId: 1492724,
      recipientId: 1581086,
      recipientItemId: 1583997,
      recipientId1: 1581187,
      recipientItemId1: 1584096,
  
  }, 
  {
      id: 1,
      name: "Struggle Bus", 
      preview: "pond425: We're rooting for you- ur doing gr8!",
      img: "/profile1.png",
      containerId: 1492725,
      recipientId: 1581087,
      recipientItemId: 1583998,
      recipientId1: 1581081,
      recipientItemId1: 1583992,
  },
  {
      id: 2, 
      name: "Staying Strong", 
      preview: "polar2220: that made my day, thanks for sharing! im actually so encouraged :)",
      img: "/frog.jpeg",
      containerId: 1492726,
      recipientId: 1581088,
      recipientItemId: 1583999,
      recipientId1: 1581080,
      recipientItemId1: 1583991
  },
  {
      id: 3, 
      name: "Juggling a lot", 
      preview: "juggler2232: woahhh that's so cool man! i wish i could do that!!",
      img: "/person.jpeg"
  },
  {
      id: 4, 
      name: "positive vibes", 
      preview: "spikel33: yeah, I'd appreciate accountability with that^^",
      img: "/pizza.webp"
  },
  {
    id: 5, 
    name: "OG gang", 
    preview: "chetmix3er: its been sooo long, how's it going?/",
    img: "/fountain.webp"
},
  // {
  //     id: 5, 
  //     name: "Day Ones", 
  //     preview: "bear2041: *sigh* it's been a really tough week guys :(",
  //     img: "/egg.png"
  // }
]

function ChatListPage() {
  const [openChat, setOpenChat] = useState(0)
  const [link, setLink] = useState("")
  const route = useParams()
  return (
    <div style={{ background: "url('/bkgd.jpeg')", backgroundSize: "cover", display: "flex", flexDirection: "column", height: "100vh" }} className="ChatListPage">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1 style={{fontSize: "3em", color: "white", letterSpacing: "2px"}}>TigerHelp</h1>
      </div>
      <div style={{padding: "5%", height: "90vh", display: "flex", flexDirection: "row"}}>
          {route.id === "0" && <ChatList accountId={route.id} setLink={setLink} chats={chats} setOpenChat={setOpenChat}></ChatList>}
          {route.id === "1" && <ChatList accountId={route.id} setLink={setLink} chats={chats1} setOpenChat={setOpenChat}></ChatList>}
          
          <ChatRoom link={link} openChat={openChat}></ChatRoom>
        </div>
    </div>
  )
}

export default ChatListPage