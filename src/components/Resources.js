import React from 'react'
import Resource from "./Resource"

const resources = [
    {
        name: "P-Safe",
        img: "pton.svg",
        tigerhelp: "@psafe",
        width: "48%",  
        marginBottom: "-15%", 
        marginTop: "0",      
    },
    {
        name: "CONTACT",
        img: "contact.png",
        width: "60%",
        tigerhelp: "@contact",
        marginBottom: "-15%",
        marginTop: "0", 
    },
    {
        name: "UHS",
        img: "uhs.png",
        marginBottom: "-25%",
        marginTop: "15%",
        width: "80%",
        tigerhelp: "@uhs",
    },
    {
        name: "PHA",
        img: "pha.png",
        marginBottom: "0%",
        marginTop: "2%",
        width: "80%",
        tigerhelp: "@pha",
    },
    {
        name: "MHI",
        img: "mhi.png",
        marginBottom: "-5%",
        marginTop: "5%",
        width: "80%",
        tigerhelp: "@mhi",
    },
]
function Resources() {
  return (
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          {resources.map(resource => <Resource resource={resource}></Resource>)}
      </div>
  )
}

export default Resources