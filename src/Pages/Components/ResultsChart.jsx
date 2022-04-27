import Chart from "react-apexcharts";
import { useState,useEffect } from 'react'
import './ResultsChart.css'





const Bar = (props) =>{
    const width = (props.amount / props.sum) * 100

    return(
        <div className="bar-line">
            <div className="bar-title">
                <h5 className="option-title">{props.text}</h5>
                <h5>{Math.round((props.amount / props.sum)*100)}%</h5>
            </div>
            <div style={{"width":`${width}%`}} className="data-bar">
               
            </div>
        </div>
    )
}

const ResultsChart = (props) =>{
    const {votes,options} = props
    let data = []
    let sum = 0
    votes.map((items,key)=>{
        data.push({text:options[key],amount: votes[key],id:key})
        sum += votes[key]; // get total votes
    })



    return(
        <div className="results-data">
            {
                data.map((opt)=>{
                    return <Bar sum = {sum} {...opt} key={opt.id}/>
                })
            }
        </div>
    )
}




export default ResultsChart;