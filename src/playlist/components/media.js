// import React from 'react';
import React, { Component } from 'react';
import './media.sass';

class Media extends Component {
  render() {
    const styles = {
      container: {
        fontSize: 14,
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div style={styles.container} className="Media">
        <div className="Media-cover">
          <img className="Media-image" src="./images/covers/bitcoin.jpg" alt="" width={260} height={160} />
          <h3 className="Media-title">¿Por qué aprender React?</h3>
          <p className="Media-author">John Serrano :D</p>
        </div>
      </div>
    )
  }
}

export default Media;
