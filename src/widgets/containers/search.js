import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { searchVideo } from '../../actions/index';
// import { bindActionCreators } from 'redux'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'David guetta',
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.input.value, 'submit');
    // console.log(this.input.value);
    // this.props.dispatch(searchVideo(this.input.value))
    this.props.searchVideo(this.input.value)
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

/*function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch)
    actions: bindActionCreators(actions, dispatch)
  }
}*/

const mapDispatchToProps = {
  searchVideo,
}

// Se recomienda usar connect dentro de los components de tipo containers
export default connect(null, mapDispatchToProps)(SearchContainer);
