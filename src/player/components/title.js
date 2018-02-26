import React from 'react';

import './title.sass';

function Title(props) {
  return (
    <div className="Title">
      <h2>{props.title}</h2>
    </div>
  )
}

export default Title;
