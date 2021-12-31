import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { minutesOfDay } from './helpers'

const Bell = (props) => {
  const [hasRung, setHasRung] = useState(false);

  const timeToRing = moment(props.timeToRingString, "h:mm AM/PM");
  const minuteToRing = minutesOfDay(timeToRing)

  if (!hasRung && props.curMinutes === minuteToRing) {
    setHasRung(true);
    console.log(`🔔 ${minuteToRing}`);
  }

  return (
    <div>{props.timeToRingString}</div>
  )
}

export default Bell;
