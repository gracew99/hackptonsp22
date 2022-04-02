import React from 'react'

function ChatCard(props) {
    function openChat() {
        console.log("Youo clicked on", props.chat.id)
        props.setOpenChat(props.chat.id)
    }
  return (
    <div onClick={openChat} style={{display: "flex", flex: "1", outline: "solid", padding: "2%"}}>
        <div style={{flex: "0.2", display: "flex", marginRight: "10%"}}>
            <img style={{ width: "120px", borderRadius: "100%" }} alt="pfp" src={props.chat.img}></img>
        </div>
        <div style={{display: "flex", flexDirection: "column", flex: "0.8"}}>
            <strong style={{paddingRight:"10%"}}>{props.chat.name}</strong>
            <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}} >
                <div>
                    {props.chat.preview}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ChatCard