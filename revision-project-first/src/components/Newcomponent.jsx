import React from "react";
import "./Newcomponent.css";
import Newcompform from "./Newcompform"

const Newcomponent = ({sendFormData}) => {

   const getNewformData = (dataObj) => {
      // alert("Hii from getNewformData" );
      // console.log(dataObj);
      sendFormData(dataObj);
   }
   
  
   return(
      <> 
      <div className="out_box">
      
      <Newcompform sendData={getNewformData}/>
      </div>
      </>
    

 
   );
}

export default Newcomponent;