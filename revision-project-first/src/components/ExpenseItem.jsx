import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    
    //let description = props.expenseData.item;
    // const [description,setdescription] = useState(props.expenseData.item);
    // const [clearbtn,setclearbtn] = useState("updated!")
    // const [reset,setreset] = useState("Reset");
    
    // const updateHandler = () => {
    //     // console.log(description);
    //     // description = "Updated!"
    //     // console.log(description);
    //     setdescription("updated!")
    //     setclearbtn("Clear")
    // }

    // const resetHandler = () => {
        
    //     setdescription(props.expenseData.item)
    //     setreset("reset")
    // }
    
    
    return(
        <div className="expense-item">
            
            <ExpenseDate  expenseData={props.expenseData}/>

            <div>
                 {/* {description} */}
                 {props.expenseData.item}
            </div>

             <div>
                 ${props.expenseData.price}
             </div>

            {/* <div>
                <button onClick={updateHandler}>{clearbtn}</button>
                <button onClick={resetHandler}>{reset}</button>

            </div>
              */}
      </div>
    );

}

export default ExpenseItem;