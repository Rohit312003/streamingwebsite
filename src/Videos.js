import React from "react";
import Flooter from "./flooter";
import './Video.css'
import SideBar from "./Sidebbar.js";

function Video(props) {
    const [play, setPlay] = React.useState(false);
    // pay and pause
    const videoRef = React.useRef(null);
    const onVedoPress = () => {

        if (play) {
            videoRef.current.pause();
            setPlay(false);

        } else {
            videoRef.current.play();
            setPlay(true);
        }
    };
    return (<div className="video">
  
        <video className="video-player"  onClick={onVedoPress} ref={videoRef} src={props.scro}></video>
        <Flooter channel={props.channel} discription={props.discription} song={props.song}></Flooter>
       <SideBar like={props.like} comments={props.comments} share={props.share} ></SideBar>
        


    </div>);


}

export default Video;



