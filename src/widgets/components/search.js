import React from 'react';
import './search.sass';

/*function Search(props) {
  return (
    <form action=""></form>
  )
}*/

// Con los parentices en ves de llaves no necesitamos hacer un return
const Search = () => (
  <form className="Search">
    <input 
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
    />
  </form>
)

export default Search;
