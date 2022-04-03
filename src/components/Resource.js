import React from 'react'
import { useNavigate } from 'react-router-dom';

function Resource(props) {
    let navigate = useNavigate();

    function onClick() {
        navigate("/chats/2/")
    }
    return (
    <div onClick={onClick} style={{display: "flex", padding: "3%", flex: "1", outline: "solid", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
        <h2 style={{flex: "0.3"}}>{props.resource.name}</h2>
        {/* <br></br> */}
        <img style={{flex: "0.3"}} width={props.resource.width} src={props.resource.img} alt="hey"></img>
        <br></br>
        <div style={{ flex: "0.3", marginBottom: props.resource.marginBottom, marginTop: props.resource.marginTop}}> {props.resource.tigerhelp} </div>
        {/* <br></br> */}
    </div>
  )
}

export default Resource