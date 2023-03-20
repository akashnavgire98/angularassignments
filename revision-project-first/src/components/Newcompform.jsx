import React, { useState } from "react";
import "./Newcompform.css";


const Newcompform = ({ sendData }) => {
    const [title, settitle] = useState();
    const [amount, setamount] = useState();
    const [date, setdate] = useState(new Date());
    const [viewForm, setviewForm] = useState(false);
    // const chngeHandler = (e) => {
    //     console.log(e.target.value);
    // }

    // const [data,setdata] = useState({
    //     title:"",
    //     amount:0,
    //     date:"",
    // });


    const submitHandler = (e) => {
        e.preventDefault();

        // const month =date.toLocaleString("en-us",{month:"long"});
        // const year = date.getFullYear();
        // const day = date.getDate();

        let dataObj = {
            id: Math.random(10).toString(),
            item: title,//  data.title
            price: amount,// data.amount
            date: new Date(date),// data.date
        };
        // console.log(dataObj);

        settitle("");
        setamount("");
        setdate("");

        sendData(dataObj);

    }


    return (

        <div>
            <form onSubmit={submitHandler} className={viewForm ? "D-block" : "D-none"}>
                <div>
                    <label>Title</label>
                    {/* <input type="text" onChange={(e) => setdata({...data,title:e.target.value})}/> */}
                    <input type="text" onChange={(e) => settitle(e.target.value)} value={title} />
                </div>

                <div>
                    <label>Amount</label>
                    <input type="number" onChange={(e) => setamount(e.target.value)} value={amount} />
                    {/* <input type="number" onChange={(e) => setdata({...data,amount:e.target.value})}/> */}
                </div>

                <div>
                    <label>Date</label>
                    <input type="date" onChange={(e) => setdate(e.target.value)} value={date} />
                    {/* <input type="date"  onChange={(e) => setdata({...data,date:e.target.value})}/> */}
                </div>

                <div >
                    <button type="submit" onClick={e => setviewForm(!viewForm)}>App Expense</button> <br />


                </div>
            </form>
            <div className={!viewForm ? "D-block" : "D-none"} >
                <button onClick={e => setviewForm(!viewForm)}>Add new expense</button>
            </div>
        </div>
    );

}

export default Newcompform;