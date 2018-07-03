import React, { Component } from 'react';
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
          <h1 className="App-title">TV Schedule</h1>
          <h2 className="data-and-time.min.js">What's on Today: {this.getDate()}. All times are ET</h2>
        </header>
        <button className = "App-button">Nick Jr. Channel</button>
        <button className = "App-button2">Nick Channel</button>
        <ul>{
          schedule.channels.map(function(channel){
            
            return (
              <React.Fragment>
                
                {
                  channel.schedule.map(function(episode){
                    return (
                    <li> 
                    <div class="dropdown">
                      <button class="dropbtn">
                      <img className= "smallImg" src={episode.icon1x1}></img>
                      <div><h1>Series Title: {episode.seriesTitle} </h1></div>
                      <div><h1>Episode Title: {episode.episodeTitle}</h1> </div>
                      <div>{episode.isOver}</div>
                      </button>
                      <div class="dropdown-content">
                        <a><div>{episode.description}</div>
                         <div>{episode.formattedTime + ' ' +episode.meridiem} </div>
                         </a>

                      </div>
                      </div>
                    </li>)
                  })
                }
              </React.Fragment>
          )
          })}
        </ul>
      </div>
    );
  }
}
export default App;

