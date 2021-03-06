import React from 'react';
import './play-pausa.sass';
import Play from '../../icons/components/play.js'
import Pause from '../../icons/components/pausa.js'

function PlayPausa(props) {
  return (
    <div className="PlayPause">
      {
        props.pause ?
          <button
            onClick={props.handleClick}
          >
            <Play size={25} color="white"/>
          </button>
        :
          <button
            onClick={props.handleClick}
          >
            <Pause size={25} color="white"/>
          </button>
      }
    </div>
  )
}

export default PlayPausa;
