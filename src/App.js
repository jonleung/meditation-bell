import React, { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import { minutesOfDay } from './helpers'
import Bell from './Bell'

function App() {
  const [curMinutes, setCurMinutes] = useState(minutesOfDay(moment()));

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurMinutes(minutesOfDay(moment()));
    }, 1000);
    return function cleanup() {};
  }, [curMinutes]) // https://stackoverflow.com/questions/55240526/useeffect-second-argument-variations-in-react-hook

  return (
    <div className="App">
      <p>curMinutes = {curMinutes}</p>
      <Bell minuteToRing={1073} curMinutes={curMinutes} />
    </div>
  );
}

export default App;
