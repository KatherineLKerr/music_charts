import React from 'react';
import './MusicItem.css';

const MusicItem = (props) => (
  <div>
    <li>
      <h4> {props.position} - {props.song['im:name'].label}</h4>
      <p>{props.song['im:artist'].label}</p>
    </li>
  </div>
)
export default MusicItem;
