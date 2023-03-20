// import React from 'react';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import Newcompform from './components/Newcomponents/Newcompform';

function App() {
  
  const expenseData = [
    {
      id:"exp1",
      date:new Date(2021, 5, 21),
      item:"New TV ",
      price:799.49,
    },
    {
      id:"exp2",
      date:new Date(2020, 3, 28 ),
      item:"Car Insurance ",
      price:294.67,
    },
    {
      id:"exp3",
      date:new Date(2021, 1, 12),
      item:"New Desk(Wooden) ",
      price:450,
    },
    {
      id:"exp4",
      date:new Date(2021, 1, 12),
      item:"New Chair ",
      price:450,
    },
  ];
  
  const getAddExpenseform = (dataobj) => {
    alert("hi from akash app");
    console.log(dataobj);
  }


  return (
    <div>
      <div>
          <Newcompform sendDataApp = {getAddExpenseform}/>
    </div>

      <div className='Big_Box'>
       <Expenses expenseData = {expenseData} />
      </div>

      
    </div>
      
    
  
    );

}
export default App;
