import React from "react";
import "./Filteryear.css";

const Filteryear = (props) => {
    return(
        <div className="Filter_color">
        <label>Filter by Year</label>
       <select onChange={(e) => props.filteryear(e.target.value)} value={props.updateFilteryear}>
           <option value="All">All</option>
           <option value="2022">2022</option>
           <option value="2021">2021</option>
           <option value="2020">2020</option>
           <option value="2019">2019</option>
           <option value="2018">2018</option>
       </select>
       </div>
    );
}

export default Filteryear;