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
          <h2 className="data-and-time.min.js">What's on Today: All times are ET</h2>
        </header>
        <button className = "App-button">Nick Jr. Channel</button>
        <button className = "App-button2">Nick Channel</button>
      </div>
    );
  }
}
export default App;
