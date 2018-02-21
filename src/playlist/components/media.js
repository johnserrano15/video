// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <div className="Media">
        <div className="Media-cover">
          <img className="Media-image" src={this.props.image} alt="" width={260} height={160} />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

// validamos que tipo de datos son los que me van a llegar.
// types: string, number, object, func, array
Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired, // isRequired para que sea obligatorio
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']), // Se valida que el dato que llega tiene que ser uno de los que estan en el array
}

// Documentación: https://reactjs.org/docs/typechecking-with-proptypes.html

export default Media;
