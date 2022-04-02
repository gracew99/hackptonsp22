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

  return (
    
    <div style={{ background: "url('/bkgd.jpeg')", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} className="HomePage">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1 style={{fontSize: "5em", color: "white", letterSpacing: "2px"}}><span onClick={click0}>Tiger</span><span onClick={click1}>Help</span></h1>
        
      </div>
    </div>

  )
}

export default HomePage;