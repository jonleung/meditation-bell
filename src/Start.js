import React, { useState, useEffect } from 'react';

const Start = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  function hide() {
    setIsVisible(false);
  }

  return (
    <div className={`Cover ${isVisible ? 'show' : 'hide'}`} onClick={hide}>
      <div className="Cover-button">
        <p className="Cover-button-text">Click To Start</p>
      </div>
    </div>
  )
}

export default Start
