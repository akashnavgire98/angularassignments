import {Alert} from "bootstrap";
import React, { useState } from "react";
import "./Login.css";



const Login = () => {

    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [phone,setphone] = useState('');
    const [flag,setflag] = useState(false);
    const [login,setlogin] = useState(true);

    function submitHandler (e) {
        e.preventDefault();

        if(!name || !email || !password || !phone){
            setflag(true);
        }
        else{
            setflag(false);
            localStorage.setItem('Email',JSON.stringify(email));
            localStorage.setItem('Password',JSON.stringify(password));

            console.log("Saved in local storage")
            setlogin(!login)
        }
    }

    

    return(
       <div className="from-group">
           <form  onSubmit={submitHandler}>
               <h1>REGISTRATION</h1>
               <div>
                   <label>Name</label>
                   <input type="text" placeholder=" Enter Full Name" className="from-control" onChange={(event) => setname(event.target.value)} />
               </div>

               <div>
                   <label>Email</label>
                   <input type="email" placeholder=" Enter Email" className="from-control" onChange={(event) => setemail(event.target.value)} />
               </div>

               <div>
                   <label>Password</label>
                   <input type="password" placeholder=" Enter Password" className="from-control" onChange={(event) => setpassword(event.target.value)} />
               </div>

               <div>
                   <label>Phone Number</label>
                   <input type="number" placeholder=" Enter Number" className="from-control" onChange={(event) => setphone(event.target.value)} />
               </div>

               <button type="submit" className="btn btn-dark btn-lg btn-block">SIGN UP</button>

               <p>ALREADY REGISTERED {" "}</p>

               {flag && (
                   <Alert color="primary" variant="danger">
                       PLEASE FILL EVERY FIELD
                   </Alert>
               )}


           </form>
           <Login/>

       </div>
    );
}

export default Login;