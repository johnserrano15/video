import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import PlayList from '../playlist/components/playlist';
import data from '../api.json';
// import './app.sass';

const app = document.getElementById('app');
// const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, app);
render(<Home data={data} />, app);
