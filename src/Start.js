import React, { useState, useEffect } from 'react';

const Start = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  function hide() {
    setIsVisible(false);
  }

  return (
    <div className={`cover-box ${isVisible ? 'show' : 'hide'}`} onClick={hide}>
      <p className="cover-text">Click to Start</p>
    </div>
  )
}

export default Start
