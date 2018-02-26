import React, { Component } from 'react';
import VideoPlayerLayout  from '../components/video-player';
import Video from './video';
import Title from '../components/title';
import PlayPausa from '../components/play-pausa';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pause: true,
      duration: 0,
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

  handleLoadedMetadata = (event) => {
    this.video = event.target; // selecciona todo el element
    this.setState({
      duration: this.video.duration
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Video"
        />
        <Controls>
          <PlayPausa
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
          />
        </Controls>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
