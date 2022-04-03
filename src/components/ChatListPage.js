import React from 'react'
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const chats = [
  {
      id: 0, 
      name: "Squad", 
      preview: "tree824: Yeah man I know exactly what you mean. That happened to me last year.",
      img: "/profile.png",
      containerId: 1493002,
      recipientId: 1581282,
      recipientItemId: 1584187,
      otherRecipientId: 1581286
      // recipientId1: ,
      // recipientItemId1: ,
  
  }, 
  {
      id: 1,
      name: "Struggle Bus", 
      preview: "pond425: We're rooting for you- ur doing gr8!",
      img: "/profile1.png",
      containerId: 1492930,
      recipientId: 1581234,
      recipientItemId: 1584143,
  },
  {
      id: 2, 
      name: "Staying Strong", 
      preview: "polar2220: that made my day, thanks for sharing! im actually so encouraged :)",
      img: "/frog.jpeg",
      containerId: 1492927,
      recipientId: 1581236,
      recipientItemId: 1584145,
  },
  {
      id: 3, 
      name: "The Fam", 
      containerId: 1492932,
      preview: "juggler2232: woahhh that's so cool man! i wish i could do that!!",
      img: "/download.jpeg",
      recipientId: 1581218,
      recipientItemId: 1584127
  },
  {
      id: 4, 
      name: "Club", 
      containerId: 1492933,
      preview: "spikel33: yeah, I'd appreciate accountability with that^^",
      img: "/dog.jpeg",
      recipientId: 1581219,
      recipientItemId: 1584128
  },
  {
      id: 5, 
      name: "Day Ones", 
      containerId: 1492934,
      preview: "bear2041: *sigh* it's been a really tough week guys :(",
      img: "/egg.png",
      recipientId: 1581220,
      ecipientItemId: 1584129
  }
]

const chats1 = [
  {
      id: 0, 
      name: "Squad", 
      preview: "tree824: Yeah man I know exactly what you mean. That happened to me last year.",
      img: "/profile.png",
      containerId: 1493002,
      recipientId: 1581286,
      recipientItemId: 1584191,
      otherRecipientId: 1581282
      // recipientId1: ,
      // recipientItemId1: ,
  
  }, 
  {
      id: 1,
      name: "Struggle Bus", 
      preview: "pond425: We're rooting for you- ur doing gr8!",
      img: "/profile1.png",
      containerId: 1492930,
      recipientId: 1581217,
      recipientItemId: 1584126,
  },
  {
      id: 2, 
      name: "Staying Strong", 
      preview: "polar2220: that made my day, thanks for sharing! im actually so encouraged :)",
      img: "/frog.jpeg",
      containerId: 1492927,
      recipientId: 1581215,
      recipientItemId: 1584124,

  },
  {
      id: 3, 
      name: "Juggling a lot", 
      containerId: 1492932,
      preview: "juggler2232: woahhh that's so cool man! i wish i could do that!!",
      img: "/person.jpeg",
      recipientId: 1581080,
      recipientItemId: 1583991
  },
  {
      id: 4, 
      name: "positive vibes", 
      containerId: 1492936,
      preview: "spikel33: yeah, I'd appreciate accountability with that^^",
      img: "/pizza.webp",
      recipientId: 1581222,
      recipientItemId: 1584131
  },
  {
    id: 5, 
    name: "OG gang",
    containerId: 1492937, 
    preview: "chetmix3er: its been sooo long, how's it going?/",
    img: "/fountain.webp",
    recipientId: 1581223,
    recipientItemId: 1584132
},
  // {
  //     id: 5, 
  //     name: "Day Ones", 
  //     preview: "bear2041: *sigh* it's been a really tough week guys :(",
  //     img: "/egg.png"
  // }
]

const chats2 = [
  {
      id: 0, 
      name: "P-Safe", 
      preview: "",
      img: "/pton.svg",
      containerId: 1493045,
      recipientId: 1581323,
      recipientItemId: 1584228,
      otherRecipientId: 1581282
      // recipientId1: ,
      // recipientItemId1: ,
  
  }, 
  {
      id: 1,
      name: "Struggle Bus", 
      preview: "pond425: We're rooting for you- ur doing gr8!",
      img: "/profile1.png",
      containerId: 1492930,
      recipientId: 1581217,
      recipientItemId: 1584126,
  },
  {
      id: 2, 
      name: "Staying Strong", 
      preview: "polar2220: that made my day, thanks for sharing! im actually so encouraged :)",
      img: "/frog.jpeg",
      containerId: 1492927,
      recipientId: 1581215,
      recipientItemId: 1584124,

  },
  {
      id: 3, 
      name: "Juggling a lot", 
      containerId: 1492932,
      preview: "juggler2232: woahhh that's so cool man! i wish i could do that!!",
      img: "/person.jpeg",
      recipientId: 1581080,
      recipientItemId: 1583991
  },
  {
      id: 4, 
      name: "positive vibes", 
      containerId: 1492936,
      preview: "spikel33: yeah, I'd appreciate accountability with that^^",
      img: "/pizza.webp",
      recipientId: 1581222,
      recipientItemId: 1584131
  },
  {
    id: 5, 
    name: "OG gang",
    containerId: 1492937, 
    preview: "chetmix3er: its been sooo long, how's it going?/",
    img: "/fountain.webp",
    recipientId: 1581223,
    recipientItemId: 1584132
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
  let navigate = useNavigate();
  function menu() {
    navigate("/summary")
  }
  return (
    <div style={{ background: "url('/bkgd.jpeg')", backgroundSize: "cover", display: "flex", flexDirection: "column", height: "100vh" }} className="ChatListPage">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1 onClick={menu} style={{fontSize: "3em", color: "white", letterSpacing: "2px"}}>TigerHelp</h1>
      </div>
      <div style={{padding: "5%", height: "90vh", display: "flex", flexDirection: "row"}}>
          {route.id === "0" && <ChatList accountId={route.id} setLink={setLink} chats={chats} setOpenChat={setOpenChat}></ChatList>}
          {route.id === "1" && <ChatList accountId={route.id} setLink={setLink} chats={chats1} setOpenChat={setOpenChat}></ChatList>}
          {route.id === "2" && <ChatList accountId={route.id} setLink={setLink} chats={chats2} setOpenChat={setOpenChat}></ChatList>}
          
          <ChatRoom link={link} openChat={openChat}></ChatRoom>
        </div>
    </div>
  )
}

export default ChatListPage