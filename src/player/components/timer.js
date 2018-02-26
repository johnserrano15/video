import React from 'react';
import './timer.sass';

function Timer(props) {
  return (
    <div className="Timer">
      <p>
        <span>00 / {props.duration} </span>
      </p>
    </div>
  )
}

export default Timer;
