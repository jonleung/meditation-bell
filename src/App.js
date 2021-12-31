import React, { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment';
import { minutesOfDay } from './helpers';
import Sit from './Sit';
import ManualBell from './ManualBell';
import Cover from './Cover';
import Clock from './Clock'

function App() {
  const [curMinutes, setCurMinutes] = useState(minutesOfDay(moment()));
  const [curTime, setCurTime] = useState(moment());

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const bellDataString = urlParams.get('bellData')
  const bellData = JSON.parse(bellDataString);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurMinutes(minutesOfDay(moment()));
      setCurTime(moment());
    }, 1000);
    return function cleanup() {
      clearInterval(intervalId)
    };
  }) // https://stackoverflow.com/questions/55240526/useeffect-second-argument-variations-in-react-hook

  return (
    <div className="App">
      <Cover />
      <div className="App-container">
        <Clock curTime={curTime}/>
        <table>
          <thead>
            <tr>
              <th>Start Bell</th>
              <th>End Bell</th>
            </tr>
          </thead>
          <tbody>
            {bellData.map((sit, i) => {
              return <Sit key={i} startTime={sit.start} endTime={sit.end} curMinutes={curMinutes} />;
            })}
            <tr>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
            <tr>
              <th>
                <ManualBell type="start"/>
              </th>
              <th>
                <ManualBell type="end"/>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="manual-bell">
        </div>
      </div>
    </div>
  );
}

export default App;
