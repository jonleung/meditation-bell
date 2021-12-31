import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { minutesOfDay } from './helpers';
import useSound from 'use-sound';
import bellStart from './sounds/bell_start.mp3'; //3x
import bellEnd from './sounds/bell_end.mp3'; //1x

const Bell = (props) => {
  const bellSound = props.type === 'start' ? bellStart : bellEnd;
  const [playSound] = useSound(bellSound);

  const [hasRungThisMinute, setHasRungThisMinute] = useState(false);
  const timeToRing = moment(props.timeToRingString, "h:mm AM/PM");
  const minuteToRing = minutesOfDay(timeToRing);

  if (!hasRungThisMinute && props.curMinutes === minuteToRing) {
    setHasRungThisMinute(true);
    playSound();
    console.log(`🔔 ${minuteToRing}`);
  } else if (hasRungThisMinute && props.curMinutes !== minuteToRing) {
    setHasRungThisMinute(false);
  }

  return (
    <th>{props.timeToRingString}</th>
  )
}

export default Bell;
