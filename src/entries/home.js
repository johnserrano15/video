import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import PlayList from '../playlist/components/playlist';
// import data from '../api.json';
// import data from '../schemas/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable'; 
// import './app.sass';

// console.log(normalizedData);
// console.log(data);

/*const initialState = {
  // dos reducers
  data: {
    // ...data,
    entities: data.entities,
    categories: data.result.categories,
    search: [],
  },
  modal: {
    visibility: false,
    mediaId: null,
  }
  // mas info de los spread operator -> http://www.etnassoft.com/2014/06/03/el-operador-de-propagacion-en-javascript-ecmascript-6-y-polyfill/
}*/

// Middlewares
/*function logger({ dispatch, getState }){
  return ( next ) => {
    return ( action ) => {
      console.log( 'estado anterior:', getState().toJS() )
      console.log( 'enviando acción:', action)
      const rslt = next( action )
      console.log( 'nuevo estado   :', getState().toJS() )
      return rslt
    }
  }
}*/

// https://github.com/xgrommx/awesome-redux

const logger = ({ dispatch, getState }) => next => action => {
  console.log( 'estado anterior:', getState().toJS() )
  console.log( 'enviando acción:', action)
  const rslt = next( action )
  console.log( 'nuevo estado   :', getState().toJS() )
  return rslt
}

const store = createStore(
  reducer,
  map(),
  applyMiddleware(logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

const homeContainer = document.getElementById('home-container');
// const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, homeContainer);
render( 
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);
