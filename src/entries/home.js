import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import PlayList from '../playlist/components/playlist';
import data from '../api.json';
// import './app.sass';

const homeContainer = document.getElementById('home-container');
// const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, homeContainer);
render(<Home data={data} />, homeContainer);
