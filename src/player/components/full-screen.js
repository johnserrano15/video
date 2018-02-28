import React from 'react';
import FullScreenIcon from '../../icons/components/full';
import './full-screen.sass';

const FullScreen = (props) => (
  <div 
    className="FullScreen"
    onClick={props.handleFullScreen}
  >
    <FullScreenIcon 
      size={25}
      color="white"
    />
  </div>
)

export default FullScreen;
