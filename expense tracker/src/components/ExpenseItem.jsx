import React, { useState } from "react";
import "./ExpenseItem.css"
import ExpenseData from "./ExpenseData";
// import { useState } from "react";

const ExpenseItem = (props) => {
// let description = props.expenseData.item;

    const [description, setdescription] = useState (props.expenseData.item);
    const [clear, setclear] = useState("update now !");
    const [reset, setprevious] = useState("Reset");
  const updateHandler = () =>{
    // console.log(description);
    // description ='updated ! ';
    // console.log(description);
    setdescription("updated !");
    setclear("clear");
  }
    const resetHandler = () =>{
      setprevious("Reset");
      setdescription(props.expenseData.item);
      setclear("Update Now");
    }
  
    return(
       <div className="expense-item">
         <ExpenseData month = {props.month} expenseData = {props.expenseData}/>
           
        <div className="textAlign">
          {description}
        </div>
        <div className="price_Box">
          {"$" + props.expenseData.price}
        </div>
        <div>
          <button onClick={updateHandler}>{clear}</button>
          <button onClick={resetHandler}>{reset}</button>
        </div>
       </div>
    )

}

export default ExpenseItem;