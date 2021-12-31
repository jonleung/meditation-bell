import React, { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment';
import { minutesOfDay } from './helpers';
import Cover from './Cover';
import Clock from './Clock';
import BellSchedule from './BellSchedule';
import ManualBells from './ManualBells';

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
      <div className="App__container">
        <Clock curTime={curTime} />
        <BellSchedule bellData={bellData} curMinutes={curMinutes} />
        <ManualBells/>
      </div>
    </div>
  );
}

export default App;
