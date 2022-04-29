import './CreatePoll.css'
import {PollItem} from '../Components/PollItem'
import PillBody from '../Components/Pill-Body'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { RiH3 } from 'react-icons/ri';

const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'https://api.fire-poll.com',
});




const CreatePoll = () =>{
    let navigate = useNavigate();
    const [topics,setTopics] = useState(["",""])
    const [title,setTitle] = useState("Poll Title")
    const [showError,setShowError] = useState("")

    const updateText = (id,text) =>{
        let newTopics = [...topics]
        newTopics[id] = text
        setTopics(newTopics)
        console.log(topics)
    }
    const updateTopics = (add) =>{
        if(add === true){
        let newTopics = [...topics]
        newTopics.push("")
        setTopics(newTopics)
        }
        else if(topics.length > 2){
        let newTopics = [...topics]
        newTopics.pop()
        setTopics(newTopics)
        }
    }
    useEffect(()=>{
        setShowError("")
        if(topics[topics.length-1] !== "") // if the last option is not empty
        {
            updateTopics(true);
        }
        else if(topics[topics.length-1] === "" && topics[topics.length-2] === "" && topics.length > 2) // if the last two options (besides 1&2) are empty, delete the last option
        {
            updateTopics(false)
        }
    },[topics])


    const SendPoll = async () =>{
        const pollTopics = topics.filter(choice => choice.length > 0)
        if(pollTopics.length > 2) // if there is not atleast 2 options
        {
        const json = JSON.stringify({"Title":title,"Options": pollTopics})
        await ax_instance.post(`/createpoll`,json,{
        headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
            }  
        })
        .then(Response=>{
            console.log(JSON.stringify(Response.data))
            navigate(`/results/${Response.data}`,{replace: true})
        })}
        else{
            setShowError("Error: Poll must have atleast 2 elements!")
        }
    }

    return(
        
            <PillBody>
                <div className="poll-title">
                        <input type="text" defaultValue={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="options">
                        {topics.map((Number,index)=>{
                        return (<PollItem key={index} id={index} placeHold={`Option ${index+1}`} updateText={updateText}/>)
                    })}
                    </div>
                    <div className="poll-title">
                        <h5>{showError}</h5>
                    </div>
                    <div className="button-holder">
                        <button onClick={()=>SendPoll()}>Create Poll</button>
                    </div>
            </PillBody>
                
    )
}

export default CreatePoll;