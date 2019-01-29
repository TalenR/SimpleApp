import React, { Component } from 'react';
import '../css/App.css';
import Game from './Game'
import Basic from './Basic'

var request = require('jquery');

class App extends Component {
  render () {
    return (
    <div className = "App">
    <Game game = 'default' />
    </div>
    );
  }
}

export default App;
