import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = document.getElementById('root');

type HelloProps = {
  name: string;
};

const Hello: React.FC = () => {
  let [clicked, setClicked] = React.useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div className={clicked ? 'clicked' : ''} onClick={toggleClicked}>
      Hello! I am {clicked ? 'clicked' : 'not clicked'}
    </div>
  );
};

ReactDOM.render(<Hello />, Root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
