import React from 'react';
import VolumeIcon from '../../icons/components/volumen';
import './volumen.sass';

function Volume(props) {
  return (
    <button className="Volume">
      <div onClick={props.handleVolumeMute}>
        <VolumeIcon 
          color="white"
          size={25}
        />
      </div>
      <div className="Volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
          value={props.value}
        />
      </div>
    </button>
  )
}

export default Volume;
