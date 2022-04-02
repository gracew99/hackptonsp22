import React from 'react'

// const convos = [
//   {
//     convo: [ "excues", "me", "whst"
      // {
      //   message: "tree824: Yeah man I know exactly what you mean. That happened to me last year."
      // },
      // {
      //   message: "pond425: We're rooting for you- ur doing gr8!"
      // },
      // {
      //   message: "polar2220: that made my day, thanks for sharing! im actually so encouraged :)"
      // },
      // {
      //   message: "juggler2232: woahhh that's so cool man! i wish i could do that!!"
      // },
      // {
      //   message: "spikel33: yeah, I'd appreciate accountability with that"
      // },
      // {
      //   message: "bear2041: *sigh* it's been a really tough week guys :("
      // },
//     ],
//   },
//   {
//     convo: [ "oiuwef", "asldjfk", "whst"]
//   },
//   {
//     convo: [ "98s7e", "me", "whst"]
//   }
// ]

function ChatRoom(props) {
  return (
    <div style={{ outline: "solid", flex: "1"}}>
      <iframe title="hi" width="100%" height="100%" frameBorder="0" src={props.link}></iframe>
      {/* ChatRoom
      {console.log("Received updated", props.openChat)}
      {convos[props.openChat].convo.map(word => word)} */}

      {/* {props.openChat && convos[props.openChat].convo.length} */}
      {/* {console.log("HEY", convos[props.openChat].convo.length)} */} 
    </div>

  )
}

export default ChatRoom