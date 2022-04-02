import React from 'react'
import { useNavigate } from 'react-router-dom';


function HomePage() {
  let navigate = useNavigate();
  function enter() {
    navigate("/chats")
  }

  return (
    
    <div style={{ background: "url('/bkgd.jpeg')", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} className="HomePage">
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <h1 style={{fontSize: "5em", color: "white", letterSpacing: "2px"}}>TigerHelp</h1>
        <p style={{textDecoration: "none"}} onClick={enter}>Enter</p>
        
      </div>
    </div>

  )
}

export default HomePage;