import React, {useState} from "react"

function Description({title, views, date, upvotes, downvotes}){

    const [upvotesAmount, setUpvotesAmount] = useState(upvotes)
    const [downvotesAmount, setDownvotesAmount] = useState(downvotes)

    
    function increaseVotes(){
        setUpvotesAmount(upvotesAmount+1)
    }

    function decreaseVotes(){
        setDownvotesAmount(downvotesAmount+1)
    }
    
    return (
        <div className="Description">
            <h2>{title}</h2>
            <p>{views} Views | Updated {date}</p>
            <button classeName="upvotes" onClick={increaseVotes}>{upvotesAmount}👍</button>
            <button classeName="downvotes" onClick={decreaseVotes}>{downvotesAmount}👎</button>
        </div>
    )
}



export default Description