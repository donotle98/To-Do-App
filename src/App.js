import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    debugger
    let foo = Date.now()
    let bar = [1 ,2 , 3];
    console.log(bar)
    console.log("Say Something")

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <hr></hr>

          { foo }
        </p>
      </div>
    );
  }
}

export default App;
