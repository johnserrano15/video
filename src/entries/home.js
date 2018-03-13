import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import PlayList from '../playlist/components/playlist';
import data from '../api.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import './app.sass';

const initialState = {
  data: {
    ...data
  }
  // mas info de los spread operator -> http://www.etnassoft.com/2014/06/03/el-operador-de-propagacion-en-javascript-ecmascript-6-y-polyfill/
}

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
