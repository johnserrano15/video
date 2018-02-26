import React, { Component } from 'react';
import VideoPlayerLayout  from '../components/video-player';
import Video from './video';
import Title from '../components/title';
import PlayPausa from '../components/play-pausa'

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pause: true,
    }
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Video"
        />
        <PlayPausa
          pause={this.state.pause}
          handleClick={this.togglePlay}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
