import React, { useState, useEffect } from 'react';

const Cover = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  function hide() {
    setIsVisible(false);
  }

  return (
    <div className={`Cover ${isVisible ? 'show' : 'hide'}`} onClick={hide}>
      <div className="Cover__button">
        <p className="Cover__button-text">Click Anywhere to Continue...</p>
      </div>
    </div>
  )
}

export default Cover
