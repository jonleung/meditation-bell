import React, { useState, useEffect } from 'react';

const Bell = (props) => {
  const [minuteToRing, setMinuteToRing] = useState(props.minuteToRing);
  const [hasRung, setHasRung] = useState(false);

  if (!hasRung && props.curMinutes === minuteToRing) {
    setHasRung(true);
    console.log(`🔔 ${minuteToRing}`);
  }

  return (
    <div>{minuteToRing}</div>
  )
}

export default Bell;
