import './PollVote.css'
import {VoteItem} from '../Components/PollItem'
import PillBody from '../Components/Pill-Body'
import { useState,useEffect } from 'react'

const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'http://localhost:8000',
});




const PollVote = (props) =>{
    const [topics,setTopics] = useState(["",""])
    const [title,setTitle] = useState("Poll Title")
    const [cVote,setCVote] = useState("");
    //const pollID = props.pollID
    const pollID = "8IeU2scRXtZKuVYvtW8M-"
    const updateText = (id,text) =>{
        let newTopics = [...topics]
        newTopics[id] = text
        setTopics(newTopics)
        console.log(topics)
    }
    const changeChoice = (id) =>{
        setCVote(id);
        console.log(id)
    }

    useEffect(()=>{
        const fetchData = async () =>{
            await ax_instance.get(`/getPoll?pollID=${pollID}`)
        .then((Response)=>{
            setTopics(Response.data.Options)
            setTitle(Response.data.Title)
        })
        }
        fetchData();
    },[])

    return(
        <PillBody>
            <div className="poll-title">
                <h2>{title}</h2>
            </div>
                <div className="options">
                    {topics.map((text,index)=>{
                    return (<VoteItem option={text} id= {index}  changeChoice = {changeChoice} key={index}/>)
                    })}
                </div>
            <div className="button-holder">
                <div className="current">
                    <h3>{topics[cVote]}</h3>
                </div>
                <button>Submit</button>
            </div> 
        </PillBody>
    )
}

export default PollVote ;