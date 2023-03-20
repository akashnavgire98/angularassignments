
import './App.css';
import Newcomponent from './components/Newcomponent';
import Expenses from "./components/Expenses";
import { useState } from 'react';
// import Newcompform from './components/Newcompform';
function App() {

  //const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  
  const dummyData = [
    {
      id:"exp1", 
      date: new Date(2021,5,12),
      item: "New TV",
      price: 799.49,
    },
    {
      id:"exp2",
      date: new Date(2020,3,28),
      item: "Car Insurance",
      price: 294.67,
    },
    {
      id:"exp3",
      date: new Date(2021,1,12),
      item: "New Desk(Wooden)",
      price: 450,
    },
    {
      id:"exp4",
      date: new Date(2022,1,12),
      item: "New Chair",
      price: 450,
    },
    
    
  ];
  // console.log(expenseData);
  const[expenseData,setExpenseData] = useState(dummyData)
  const getNewformData = (dataObj) => {
    // alert("Hii from appjs" );
    // console.log(dataObj);
    // expenseData.push(dataObj);
    // console.log(expenseData);
    setExpenseData([dataObj, ...expenseData]);
    console.log(expenseData)
 }
    
  return (
    <div>
      
      {/* <Newcompform/> */}
      <Newcomponent sendFormData={getNewformData}/>
      <div className='container'>
        <Expenses expenseData = {expenseData} />
      </div>
     

    </div>
    
  );
  
}

export default App;
