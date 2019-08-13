import React from 'react';

class MusicContainer extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        musicChart: null
      };
    }

  componentDidMount() {
      console.log("im the componentDidMount", this.state);
      const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

      fetch(url)
        .then(res => res.json())
        .then(musicChart => this.setState({ musicChart: musicChart }))
        .catch(err => console.error);
    }

    render() {
      return(
        <h1>hello im a container</h1>
      )
    }
}

export default MusicContainer;
