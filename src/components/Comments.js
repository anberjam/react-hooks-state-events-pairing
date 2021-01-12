import React from "react"

function Comments({commentArray}){

    const comments = commentArray.map((comm) => (
        <div   key={comm.id}>
        <h5>{comm.user}</h5>

        <p>{comm.comment}</p>
        
        </div>
    ))

    return(
      <div className="Comments">{comments}</div>
    )
}



export default Comments