import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import date from 'date-and-time';
import schedule from './schedule.json'
//schedule.title
console.log(schedule);


class App extends Component {
 //this gets the date and time through a component
  getDate(){
    let now = new Date();
    return date.format(now, 'ddd MMM DD YYYY hh:mm');
  }
  //this gets the data
//const loadJsonFile =  require('schedule');
//loadJsonFile('schedule.json').then(json => {
//console.log(json);
//});

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TV Schedule</h1>
          <h2 className="data-and-time.min.js">What's on Today: {this.getDate()}. All times are ET</h2>
        </header>
        <button className = "App-button">Nick Jr. Channel</button>
        <button className = "App-button2">Nick Channel</button>
        <ul>{
          schedule.channels.map(function(channel){
            
            return (
              <React.Fragment>
                <li>{channel.id}-{channel.title}</li>
                {
                  channel.schedule.map(function(episode){
                    return (
                    <li>
                    <div>{episode.seriesUrlKey} </div>
                    <div>{episode.seriesTitle} </div>
                    <div>{episode.episodeTitle} </div>
                    <div>{episode.description} </div>
                    <div>{episode.formattedTime + ' ' +episode.meridiem} </div>
                    <div>{episode.icon1x1}</div>
                    <div>{episode.icon16x9}</div>
                    <div>{episode.airTime}</div>
                    <div>{episode.isOver}</div>
                    </li>)
                  })
                }
              </React.Fragment>
            )
          })}
        </ul>
        
        <u2>
        {
          schedule.channels.map(function(channel){ 
            return (
              <React.Fragment>
                <li>{channel.id}-{channel.title}</li>
                {
                  channel.schedule.map(function(episodeA){
                    return (
                    <li>
                    <div>{episodeA.seriesUrlKey} </div>
                    <div>{episodeA.seriesTitle} </div>
                    <div>{episodeA.episodeTitle} </div>
                    <div>{episodeA.description} </div>
                    <div>{episodeA.formattedTime + ' ' +episodeA.meridiem} </div>
                    <div>{episodeA.icon1x1}</div>
                    <div>{episodeA.icon16x9}</div>
                    <div>{episodeA.airTime}</div>
                    <div>{episodeA.isOver}</div>
                    </li>)
                  })
                }
              </React.Fragment>
            )
          })}
        </u2>

      </div>
    );
  }
}
export default App;