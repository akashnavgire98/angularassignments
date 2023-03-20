import React from "react";
import { NavLink } from "react-router-dom";


function Login() {
    return (
      <div>
       <h1>From Login</h1>
       <NavLink exact to="/contact">To contact Page</NavLink>
      </div>
    );
  }
  
  export default Login;
  