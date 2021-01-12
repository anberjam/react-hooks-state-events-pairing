import React from "react";
import video from "../data/video.js";
import Comments from "./Comments";
import Description from "./Description";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
     
        <Description title={video.title} views={video.views} date={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}  />
      
        <Comments commentArray = {video.comments}/>
      

    
    </div>

  );
}

export default App;
