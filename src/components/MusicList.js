import React from 'react';
import MusicItem from './MusicItem'
import './MusicList.css';

class MusicList extends React.Component {

  render(props) {

    const musicNodes = this.props.chart.map((song, index) => {
      return(
        <MusicItem song={song} position={index+1} key={index}></MusicItem>
      )
    })

    return (
      <div className="music-list">
        <ul>
          {musicNodes}
        </ul>
      </div>
    )
  }
}

export default MusicList;
