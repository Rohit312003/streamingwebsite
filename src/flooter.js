import React from  "react";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import './flooter.css'
function flooter(props){

return (<div className="videoFooter">
   <div className="footerTexto"><h3>{props.channel}</h3>
  
   <p>{props.discription}</p>
   <div className="songName"><MusicNoteIcon className="logoo"></MusicNoteIcon><p className="songo">{props.song}</p>
   </div>
   </div>
   
   <img className="footerImagelogo" src="https://www.pngmart.com/files/15/Black-CD-Disk-Vector-PNG-Transparent-Image.png"></img>
 
</div>);



}


export default flooter;