import React from 'react';
import MusicItem from './MusicItem'

class MusicList extends React.Component {

  render(props) {

    const musicNodes = this.props.chart.map((song, index) => {
      return(
        <MusicItem key={index}>{song.title.label} - {song['im:artist'].label}</MusicItem>
      )
    })

    return (
      <div>
        <h3>musiclist</h3>
        <ol>
          {musicNodes}
        </ol>
      </div>
    )
  }
}

export default MusicList;
