import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'David guetta',
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value, 'submit');
    console.log(this.input.value);
    // Aca se puede enviar todos los datos con un post
  }

  setInputref = (element) => {
    this.input = element; // muy inportante la referencia a nuestro element
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render() {
    return (
      <Search
        setRef={this.setInputref}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer;
