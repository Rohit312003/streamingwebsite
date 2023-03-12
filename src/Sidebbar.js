
import './Sidebbar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React,{ useState } from "react";
function SideBar(props){
const [liked,setliked]=useState(false);

    return (<div className="sideBarr">
    <div className="videoside_barbutton">{liked?(<FavoriteBorderIcon  fontSize="large" onClick={(e)=>setliked(false)}/>)
    :(<FavoriteIcon fontSize="large" onClick={(e)=>setliked(true)}></FavoriteIcon>)}
    <p>{liked?props.like+1:props.like}</p></div>
    <div className="videoside_barbutton"><MessageIcon 
     fontSize="large"></MessageIcon>
    <p>{props.comments}</p></div>
    <div className="videoside_barbutton"><ShareIcon fontSize="large"></ShareIcon>
    <p>{props.share}</p></div></div>);
}

export default SideBar;