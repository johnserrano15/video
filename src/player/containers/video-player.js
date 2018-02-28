import React, { Component } from 'react';
import VideoPlayerLayout  from '../components/video-player';
import Video from './video';
import Title from '../components/title';
import PlayPausa from '../components/play-pausa';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volumen from '../components/volumen';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pause: true,
      duration: 0,
      currentTime: 0,
      currentTimeProgress: 0,
      durationProgress: 0,
      loading: false,
      volume: 1,
      lastVolume: 0,
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

  handleSeeking = (event) => {
    this.setState({
      loading: true
    });
  }

  handleSeeked = (event) => {
    this.setState({
      loading: false
    });
  }

  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
    this.setState({
      volume: this.video.volume
    })
  }

  handleVolumeMute = (event) => {
    // this.video.volume = 0;
    // console.log(this.state.volume)

    this.state.volume >= 0.1 ? this.video.volume = 0 : this.video.volume = this.state.lastVolume;
    this.setState({
      volume: this.video.volume,
      lastVolume: this.state.volume
    })
  }

  handleFullScreen = (event) => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }

  setRef = (element) => {
    // console.log(element)
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
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
          <Volumen 
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeMute={this.handleVolumeMute}
            value={this.state.volume}
          />
          <FullScreen 
            handleFullScreen={this.handleFullScreen}
          />
        </Controls>
        <Spinner active={this.state.loading}/>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
