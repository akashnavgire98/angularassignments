import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
 
const Expenses = ({expenseData}) => {
    return(
        // <div>
        //      {/* <ExpenseItem expenseData = {expenseData[0]} month = {month}/>
        //     <ExpenseItem expenseData = {expenseData[1]} month = {month}/>
        //     <ExpenseItem expenseData = {expenseData[2]} month = {month}/>
        //     <ExpenseItem expenseData = {expenseData[3]} month = {month}/> */}
        //     <div/>
            expenseData.map(row => {
                return(
                    <div className="expenseData-list">
                    <ExpenseItem expenseData = {row}/>
                    </div>
                )
            })
        
    )

}
export default Expenses;