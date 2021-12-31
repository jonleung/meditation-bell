import React, { useState, useEffect } from 'react';

import Bell from './Bell';

const Sit = (props) => {
  return (
    <div>
      <Bell type="start" timeToRingString={props.startTime} curTime={props.curTime} />
      <Bell type="end" timeToRingString={props.endTime}  curTime={props.curTime}/>
    </div>
  )
}

export default Sit;
