// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.sass';

class Media extends Component {
  /*
  // Esto es con es7
  state = {
    author: 'John Serrano'
  }
  */
  // Esto es con es2015 o es6
  constructor(props) {
    super(props)
    this.state = {
      author: props.author,
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  // Esto es con es2015 o es6
  // handleClick(event) {
  //   console.log(this.props.title);
  // }

  // Se puede hacer con arrow function y esto es gracias a stage-2 que me trae caracteristicas de es7
  handleClick = (event) => {
    // console.log(this.state.author);
    this.setState({
      author: '@jandrey15',
    });
  }
  // Documentación: https://reactjs.org/docs/handling-events.html

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
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={this.props.cover} alt="" width={260} height={160} />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

// Specifies the default values for props:
Media.defaultProps = {
  author: '@jandrey15'
};

// validamos que tipo de datos son los que me van a llegar.
// types: string, number, object, func, array
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired, // isRequired para que sea obligatorio
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']), // Se valida que el dato que llega tiene que ser uno de los que estan en el array
}

// Documentación: https://reactjs.org/docs/typechecking-with-proptypes.html

export default Media;

/*
   --------- CICLO DE VIDA DE UN COMPONENT ----------------

class MiComponente extends Components{

  constructor(){
  // Enlazo (bind) eventos y/o inicializo estado
  }
  componentWillMount(){
  // Se ejecuta antes de montar el componente
  // Se podría usar para hacer un setState()
  }
  render(){
  // Contiene todos los elementos a renderizar
  // podrías usarlo para calcular propiedades (ej: concatenar una cadena)
  }
  componentDidMount(){
  //Solo se lanza una vez
  //Ideal para llamar a una API, hacer un setInteval, etc
  }

  //Actualización:
  componentWillReceiveProps(){
  //Es llamado cuando el componente recibe nuevas propiedades.

  }
  shouldComponentUpdate(){
  //Idea para poner una condición y  si las propiedades que le llegaron anteriormente
  // eran las mismas que tenia retornar false para evitar re-renderear el componente
  }
  componentWillUpdate(){
  //metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
  }

  // re-render si es necesario...

  componentDidUpdate(){
  //Método llamado luego del re-render
  }
  componentWillUnmount(){
  //Método llamado antes de desmontar el componente
  }
  componentDidCatch(){
  // Si ocurre algún error, lo capturo desde acá:
  }

}
*/