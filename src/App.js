import React, { useState, useEffect } from 'react';
import './App.css';
import moment from 'moment'
import { minutesOfDay } from './helpers'


function App() {
  const [timeInMinutes, setTime] = useState(minutesOfDay(moment()));

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(minutesOfDay(moment()));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeInMinutes])

  return (
    <div className="App">
      {timeInMinutes}
    </div>
  );
}

export default App;
