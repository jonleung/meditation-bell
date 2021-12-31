import React, { useState, useEffect } from 'react';

import Bell from './Bell';

const Sit = (props) => {
  return (
    <div>
      <Bell type="start" timeToRingString={props.startTime} curMinutes={props.curMinutes} />
      <Bell type="end" timeToRingString={props.endTime}  curMinutes={props.curMinutes}/>
    </div>
  )
}

export default Sit;
