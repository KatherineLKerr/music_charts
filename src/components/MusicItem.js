import React from 'react';
import './MusicItem.css';

const MusicItem = (props) => (
  <div className="music-item">
    <li>
      <p className="music-item-title"> {props.position} - {props.song['im:name'].label}</p>
      <p> {props.song['im:artist'].label} </p>
    </li>
  </div>
)
export default MusicItem;
