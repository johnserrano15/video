import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// console.log('Hola mundo');
import Media from './playlist/components/media';

const app = document.getElementById('app');
const holaMundo = <h1>Hola mundo React :)</h1>;

// ReactDOM.render(<Media />, app);
render(<Media title="¿Por qué aprender React?" author="John Serrano" image="./images/covers/bitcoin.jpg" />, app);
