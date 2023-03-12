
import db from "./firebase.js"
import React, {useEffect, useState } from "react";
import './App.css';
import Video from './Videos';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
    setVideos(snapshot.docs.map((doc) => doc.data()))
  );
  }, []);

const lolo=videos;

  return (
    <div className="app">
    <div className="app_videos">
       
{videos.map(({scro,channel,discription,song,like,comments,share})=>(
  <Video scro={scro} channel={channel} discription={discription}
  song={song}
  like={like} comments={comments}  share={share}/>))}


    </div>
    </div>
  );
}

export default App;