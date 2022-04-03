import React from 'react'
import { useNavigate } from 'react-router-dom';
import Resources  from './Resources';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function HomePage() {

    
    const options = {
        animationEnabled: true,	
        title:{
            text: "Sentiment Over Time"
        },
        axisY : {
            title: "Sentiment Score"
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "spline",
            name: "Princeton",
            showInLegend: true,
            dataPoints: [
                { y: 55, label: "Jan" },
                { y: 60, label: "Feb" },
                { y: 62, label: "Mar" },
                { y: 68, label: "Apr" },
                { y: 62, label: "May" },
                { y: 60, label: "Jun" },
                { y: 66, label: "Jul" },
                { y: 69, label: "Aug" },
                { y: 63, label: "Sept" },
                { y: 68, label: "Oct" },
                { y: 64, label: "Nov" },
                { y: 60, label: "Dec" }
            ]
        },
        {
            type: "spline",
            name: "Naz Saul",
            showInLegend: true,
            dataPoints: [
                { y: 62, label: "Jan" },
                { y: 63, label: "Feb" },
                { y: 65, label: "Mar" },
                { y: 62, label: "Apr" },
                { y: 62, label: "May" },
                { y: 65, label: "Jun" },
                { y: 72, label: "Jul" },
                { y: 68, label: "Aug" },
                { y: 75, label: "Sept" },
                { y: 70, label: "Oct" },
                { y: 65, label: "Nov" },
                { y: 69, label: "Dec" }
            ]
        }]
}

  return (
    
    <div style={{ background: "url('/bkgd.jpeg')", backgroundSize: "cover", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }} className="HomePage">
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{fontSize: "3em", color: "white", letterSpacing: "2px"}}><span>Tiger</span><span>Help</span></h1>
      </div>
      <div style={{height: "90vh", display: "flex", width: "100%", flexDirection: "column", alignItems: "center"}} >
        <div style={{display: "flex", flex: "0.5", flexDirection: "row"}}>
                <Resources></Resources>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{display: "flex", flex: "1", width: "80%",  flexDirection: "row"}}>
        
        <CanvasJSChart options = {options}
            // onRef = {ref => this.chart = ref} 
        />
        </div>
      </div>
    </div>

  )
}

export default HomePage;