import React, { Component } from 'react';
import VideoPlayerLayout  from '../components/video-player';
import Video from './video';
import Title from '../components/title';
import PlayPausa from '../components/play-pausa';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pause: true,
      duration: 0,
      currentTime: 0,
      currentTimeProgress: 0,
      durationProgress: 0,
    }
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  leftpad(number) {
    const pad = '00';
    // la funcion hace toma 00, 0 + 1 = 01 todo en string
    // desde el 0 hasta el 1 o 0 al 0 dependiendo del number si bine 1 al 9 o ya 10.. 
    return pad.substring(0, pad.length - number.length) + number;
  }

  formattedTime(secs) {
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);
    return `${minutes} : ${this.leftpad(seconds.toString())}`
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target; // selecciona todo el element
    this.setState({
      duration: this.formattedTime(this.video.duration),
      durationProgress: this.video.duration
    })
  }

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: this.formattedTime(this.video.currentTime),
      currentTimeProgress: this.video.currentTime
    })
  }

  handleProgressChange = (event) => {
    // event.target.value
    this.video.currentTime = event.target.value
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
            currentTime={this.state.currentTime}
          />
          <ProgressBar 
            duration={this.state.durationProgress}
            value={this.state.currentTimeProgress}
            handleProgressChange={this.handleProgressChange}
          />
        </Controls>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
