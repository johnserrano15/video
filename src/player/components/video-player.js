import React from 'react';
import './video-player.sass';

const VideoPlayerLayout = (props) => (
  <div className="VideoPlayer">
    {props.children}
  </div>
)

export default VideoPlayerLayout;
