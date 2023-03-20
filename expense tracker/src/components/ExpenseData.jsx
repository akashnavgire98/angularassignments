 import React from "react";
 import "./ExpenseData.css";

 const ExpenseData = ({expenseData}) => {
    const months = expenseData.date.toLocaleString("en-us",{month:"long"});
    const year = expenseData.date.getFullYear();
    const date = expenseData.date.getDate();
     return(
        <div className="expense-data" >
        <div className="expense-data_month">{months}</div>
        <div className="expense-data_year">{year}</div>
        <div className="expense-data_date">{date}</div>
      </div>
     )
 };

 export default ExpenseData;