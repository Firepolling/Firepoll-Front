import './PollItem.css'




const PollItem = ({id,placeHold,updateText}) =>{

    return(
        <div className="pill-shape">
            <input type="text" className="pill-input" placeholder={placeHold} onChange={e=>updateText(id,e.target.value)}/>
        </div>
    )
}

const VoteItem = ({id,option,changeChoice}) =>{

    
    
    return(
        <div className="pill-shape">
            <button className='Vote-btn' onClick={() => changeChoice(id)}>{option}</button>
        </div>
    )
    
}

export {PollItem,VoteItem};