import React, { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import { minutesOfDay } from './helpers'
import Sit from './Sit'

function App() {
  const [curMinutes, setCurMinutes] = useState(minutesOfDay(moment()));

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const bellDataString = urlParams.get('bellData')
  const bellData = JSON.parse(bellDataString);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurMinutes(minutesOfDay(moment()));
    }, 1000);
    return function cleanup() {};
  }, [curMinutes]) // https://stackoverflow.com/questions/55240526/useeffect-second-argument-variations-in-react-hook



  return (
    <div className="App">
      <p>curMinutes = {curMinutes}</p>
      <Sit startTime="9:30 AM" endTime="9:40 AM"/>
    </div>
  );
}

export default App;
