import React from 'react';
import './MusicItem.css';

const MusicItem = (props) => (
  <div className="music-item">
    <li>
      <div>
        <img src={props.song['im:image'][1].label}/>
      </div>
      <div>
        <p className="music-item-title"> {props.position} - {props.song['im:name'].label}</p>
        <p> {props.song['im:artist'].label} </p>
      </div>
    </li>
  </div>
)
export default MusicItem;
