import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import PlayList from './playlist/components/playlist';
import data from './api.json';

const app = document.getElementById('app');
// const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, app);
render(<PlayList data={data} />, app);
