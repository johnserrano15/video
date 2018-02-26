import React, { Component } from 'react';
import VideoLayout from '../components/video';

class Video extends Component {
  constructor(props) {
    super(props)
  }

  togglePlay() {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  setRef = (element) => {
    this.video = element;
  }

  render() {
    return (
      <VideoLayout>
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
        />
      </VideoLayout>
    )
  }
}

export default Video;
