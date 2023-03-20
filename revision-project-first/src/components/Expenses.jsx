import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Filteryear from "./Filteryear";
import Chart from "./chart";

const Expenses = ({expenseData}) => {

    const [updateFilteryear,setupdateFilteryear] = useState("All");
    // console.log(updateFilteryear);

    const filteryear = (year) => {
       console.log(year);
       setupdateFilteryear(year);
    }
    
     let filterRecord=expenseData.filter((exp) => {
         if (updateFilteryear === "All"){
             return exp;
         }
         else{
        return (exp.date.getFullYear().toString() === updateFilteryear.toString());
    //    return console.log(exp.date.getFullYear());
     }} );
    return(
        // <div>
        //      <ExpenseItem expenseData = {expenseData[0]} months = {months}/>
        //     <ExpenseItem expenseData = {expenseData[1]} months = {months}/>
        //     <ExpenseItem expenseData = {expenseData[2]}months = {months}/>
        //     <ExpenseItem expenseData = {expenseData[3]}months = {months}/>
        // </div>
        
        <div>
            
            <div>
                <Filteryear  filteryear={filteryear} updatefilteryear={updateFilteryear}/>
            </div>
            <div>
                <Chart filterRecord = {filterRecord}/>
            </div>
            {filterRecord.length === 0 && 
                <h1>NO DATA FOUND</h1>
            }

       {
           filterRecord.length > 0 && 

        filterRecord.map((row) => {
            return(       
            <div className="expense-list">
            <ExpenseItem key={row.id} expenseData = {row}/>
            </div>
            );
         })
        }
         </div>
    );
};

export default Expenses;