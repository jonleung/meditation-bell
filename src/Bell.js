import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { minutesOfDay } from './helpers';
import useSound from 'use-sound';
import bellStart from './sounds/bell_start.mp3'; //3x
import bellEnd from './sounds/bell_end.mp3'; //1x

const Bell = (props) => {
  const [playBellStart] = useSound(bellStart);
  const [playBellEnd] = useSound(bellEnd);

  const [hasRung, setHasRung] = useState(false);
  const timeToRing = moment(props.timeToRingString, "h:mm AM/PM");
  const minuteToRing = minutesOfDay(timeToRing);

  if (!hasRung && props.curMinutes === minuteToRing) {
    setHasRung(true);
    playBellEnd()
    console.log(`🔔 ${minuteToRing}`);
  }

  return (
    <div>{props.timeToRingString} ({minuteToRing})</div>
  )
}

export default Bell;
