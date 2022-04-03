import React from 'react'
import { useNavigate } from 'react-router-dom';


function HomePage() {
  let navigate = useNavigate();
  function click0() {
    navigate("/chats/0")
  }
  function click1() {
    navigate("/chats/1")
  }
  // function hey() {
  //   const url = "http://localhost:8000/checkMessage"
  //   const body = JSON.stringify({
  //       message: "i hate you"
  //   })
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: body,
  //     redirect: 'follow'
  //   };
  //   fetch(url, requestOptions)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //       // if (data.class === "offensive_language\n" || data.class === "hate_speech\n") {
  //       //   console.log("ALERT")
  //       // }
  //   })

  // }

  return (
    
    <div style={{ background: "url('/bkgd.jpeg')", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} className="HomePage">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1 style={{fontSize: "5em", color: "white", letterSpacing: "2px"}}><span onClick={click0}>Tiger</span><span onClick={click1}>Help</span></h1>
        {/* <p onClick={hey}>experiment</p> */}
      </div>
    </div>

  )
}

export default HomePage;