import React from 'react';

const MusicItem = (props) => (
  <div>
    <li>
      <h4> {props.position} - {props.song['im:name'].label}</h4>

      {props.song['im:artist'].label}
    </li>
  </div>
)
export default MusicItem;
