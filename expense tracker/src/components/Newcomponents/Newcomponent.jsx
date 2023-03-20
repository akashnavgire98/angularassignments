import React from "react";
import "./Newcomponent.css"
import Newcompform from "./Newcompform"

    // const Newcomponent = (props) => {
        const Newcomponent = ({sendDataApp}) => {
        

            const getNewcompform = (dataobj) => {
                alert("hii from akash");
                console.log(dataobj);
                //props.sendDataApp(dataobj);
                sendDataApp(dataobj);
            }

        return(
        <div className="out_box">
            <Newcompform sendData ={getNewcompform}/>
        </div>
        )
    }

export default Newcomponent;