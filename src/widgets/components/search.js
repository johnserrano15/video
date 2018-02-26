import React from 'react';
import './search.sass';

/*function Search(props) {
  return (
    <form action=""></form>
  )
}*/

// Con los parentices en ves de llaves no necesitamos hacer un return
const Search = (props) => (
  <form 
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
      // defaultValue="David guetta"
    />
  </form>
)

export default Search;
