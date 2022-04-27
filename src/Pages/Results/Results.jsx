import './Results.css'
import PillBody from '../Components/Pill-Body'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ResultsChart from '../Components/ResultsChart'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const axios = require('axios').default;

const ax_instance = axios.create({
    baseURL: 'https://api.fire-poll.com',
});

const Results = () =>{
    const [topics,setTopics] = useState(["",""])
    const [title,setTitle] = useState("Poll Title")
    const [votes,setVotes] = useState([])
    const {pollID} = useParams()


    const fetchData = async () =>{
            await ax_instance.get(`/getPoll?pollID=${pollID}`)
        .then((Response)=>{
            setTopics(Response.data.Options)
            setTitle(Response.data.Title)
            setVotes(Response.data.Vote)
        })
        }
    const interval = setInterval(() => {
        fetchData()
    }, 1000*6*2); // refresh results every two minutes

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <PillBody>
            <div className="poll-title">
                <h2>{title}</h2>
            </div>
            <div className="results-body">
                <ResultsChart votes={votes} options={topics}/>
            </div>
            <div className="sharelink">
                <h4>Share Poll: </h4>
                <h4>Fire-Poll.com/vote/{pollID}</h4>
                <CopyToClipboard text={`https://fire-Poll.com/vote/${pollID}`}>
                <button>Copy to Clipboard</button>
                </CopyToClipboard>
            </div>
        </PillBody>
    )
}

export default Results;