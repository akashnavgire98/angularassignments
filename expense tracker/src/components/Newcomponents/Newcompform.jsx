import React, {useState} from "react";
import "./Newcompform.css";

//const Newcompform = {(sendData)} => {
const Newcompform = (props) => {
    const [title, settitle] = useState("");
    const [amount, setamount] = useState("");
    const [date, setdate] = useState("");

    // const [data, setdata] = usestate({
    //     title:"",
    //     amount:0,
    //     date:"",
    // })

    const submitHandler = (event) => {
        event.preventDefault();
        let dataobj = {
            Title: title,
            Amount:amount,
            Date:date,
        };
        console.log(dataobj);

        settitle("");
        setamount("");
        setdate("");

        //sendData();
        props.sendData();
    }
    
    return(
        <div>
            <form className="form_Tag" onSubmit={submitHandler}>
                <div className="first_Item">
                <label>Title:</label>
                <input type="text" value={title} onChange={event => settitle(event.target.value)}/>
                {/* <input type="text" onChange={event=> setdata({...setdata, title:event.target.value})}/> */}
                </div>

                <div className="second_Item">
                <label>Amount:</label>
                <input type="number" value={amount} onChange={event => setamount(event.target.value)}/>
                {/* <input type="text" onChange={event=> setdata({...setdata, title:event.target.value})}/> */}
                </div>

                <div className="third_Item">
                <label>Date:</label>
                <input type="date" value={date} onChange={event => setdate(event.target.value)}/>
                {/* <input type="date" onChange={event=> setdata({...setdata, title:event.target.value})}/> */}
                </div>

                <div className="fourth_Item">
                    <button className="add_butt" type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default Newcompform;