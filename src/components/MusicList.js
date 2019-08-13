import React from 'react';
import MusicItem from './MusicItem'

class MusicList extends React.Component {

  render(props) {

    const musicNodes = this.props.chart.map((song, index) => {
      return(
        <MusicItem key={index} artist={song['im:artist'].label}> {song.title.label}</MusicItem>
      )
    })

    return (
      <div>
        <h3>musiclist</h3>
        <ul>
          {musicNodes}
        </ul>
      </div>
    )
  }
}

export default MusicList;
