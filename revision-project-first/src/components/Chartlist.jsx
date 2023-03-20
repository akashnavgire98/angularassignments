import React from "react";
import "./Chartlist.css";


const Chartlist = (props) => {
    let barheight = "0%"
    if(props.maxValue > 0){
        barheight = Math.round ((props.value/props.maxValue)*100) + "%";
        console.log(barheight);
    }
    return(
        <div className="chart_Bar">
            <div className="chart_Barinner">
            <div className="chartBar_fill" style={{height: barheight}}></div>
            </div>
            <div className="chartBar_label">{props.label}</div>
        </div>
    )
}




export default Chartlist;