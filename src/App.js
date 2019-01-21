import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';
import Basic from './Basic';

var request = require('jquery');

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Basic game = 'default' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/

class App extends Component {
  render () {
    return (
    <div className = "App">
    <Basic game = 'default' />
    </div>
    );
  }
}

export default App;
