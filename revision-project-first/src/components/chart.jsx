import React from "react";
import "./chart.css";
import Chartlist from "./Chartlist";


const Chart = (props) => {
    console.log(props.filterrecord)
    let chartDataPoint = [
        {label : "jan", price:0},
        {label : "feb", price:0},
        {label : "mar", price:0},
        {label : "april", price:0},
        {label : "may", price:0},
        {label : "june", price:0},
        {label : "july", price:0},
        {label : "Aug", price:0},
        {label : "sept", price:0},
        {label : "oct", price:0},
        {label : "Nov", price:0},
        {label : "dec", price:0},
    ];

        for(let record of props.filterRecord){
            let month = record.date.getMonth();
            chartDataPoint[month].price += record.price;
        }

        const priceArray = props.filterRecord.map(changing => changing.price);

        let maxPrice = Math.max(...priceArray);
    return(
        <div className="chart">
            {
                chartDataPoint.map((record) => {
                    return(
                        <Chartlist label ={record.label} value={record.price} maxValue={maxPrice}/>
                    )
                })
            }
       </div>
    );
}


export default Chart;