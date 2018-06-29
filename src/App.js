import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TV Schedule</h1>
        </header>
        <p className="App-intro">
          TV Schedule for shows on Nick and Nick Jr.
        </p>
        <button onclick = "App-button">Nick Jr. Channel</button>
        <button onclick = "App-button">Nick Channel</button>
      </div>
    );
  }
}
export default App;
