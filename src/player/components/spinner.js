import React from 'react';
import './spinner.sass';

function Spinner(props) {
  if (!props.active) return null
  return (
    <div className="Spinner">
      <span>Cargando...</span>
    </div>
  )
}

export default Spinner;
