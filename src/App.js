import React, { Component } from 'react';
import './App.css';
import date from 'date-and-time';
import head from './splat-banner.png';
import noPic from './fallbacks-1x1.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickData: [],
      nickjrData: [],
      currentChannel: 'nickjr'
    };
  }
  //this gets the date and time through a component
  getDate(){
    let now = new Date();
    return date.format(now, 'dddd MMM DD YYYY hh:mm A');
  }

  updateCurrentChannel(currentChannel){
    if (this.state.currentChannel === currentChannel) {
      return
    }
    this.setState({
      currentChannel
    })
  }

  componentDidMount() {
   fetch('https://gist.githubusercontent.com/sejalmehra/8b457925942ad4f218c1c68240e73592/raw/ea1c4a2ffcc0a6092bf1a79b3aa45749c2aae66e/data.json')
     .then(res => res.json())
     .then(data => {
        const nickData = data.channels.find(channel => {
          return channel.key === 'schedule.nick'
        })
        const nickjrData = data.channels.find(channel => {
          return channel.key === 'schedule.nickjr'
        })
        this.setState({
          nickData: nickData.schedule,
          nickjrData: nickjrData.schedule
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={head} className="App-head" align="center" alt="head"/>
          <h1 className="App-title">TV Schedule for Nick Jr. and Nick</h1>
          <h2 className="date-and-time-header">What's on Today: {this.getDate()} All times are ET</h2>
        </header>

        <button className = "App-button"
          onClick = {
            () => { 
              this.updateCurrentChannel("nickjr")
            }
          }
        >Nick Jr. Channel</button>

        <button className = "App-button2"
          onClick = {
            () => { 
              this.updateCurrentChannel("nick")
            }
          }
        >Nick Channel</button>
        <ul className='tv-schedule-list'>
          {
            this.state.currentChannel === 'nick' &&
            <Information schedule={this.state.nickData} />
          }
          {
            this.state.currentChannel === 'nickjr' &&
            <Information schedule={this.state.nickjrData} />
          }
        </ul>
      </div>
    );
  }
}

class Information extends Component {
  render() {
    return this.props.schedule.map((episode) => {
      return (
      <li key= {episode.episodeTitle + episode.formattedTime}> {
      <div className="dropdown">
        <button className="dropbtn">
        <img className= "smallImg" src={episode.icon1x1 || noPic}></img>
        <div><h1 className="series">Series: {episode.seriesTitle} </h1> </div>
        <div><h2>Episode: {episode.episodeTitle}</h2> </div>
        <div><h3> {episode.description}</h3> </div>
        <div>{episode.isOver}</div>
        </button>
        <div className="dropdown-content">
          <a>
           <div>{episode.formattedTime + ' ' +episode.meridiem} </div>
           </a>
        </div>
        </div>
       } </li>)
    })
  }
}

export default App;