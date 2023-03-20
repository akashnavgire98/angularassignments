import React from "react";
import "./Navbar.css";
import Logo from "../images/akashlogo.jpg"
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return(
        <div className="navBar">
            <div className="logo">
                <img src={Logo} alt="" />
             </div>
            
                
                <div className="navList">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active_comp">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about"  activeClassName="active_comp">About us</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact"  activeClassName="active_comp">Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/login"  activeClassName="active_comp">Login</NavLink>
                    </li>
                </ul>
            </div>
           
                
        </div>
    );
}

export default Navbar;