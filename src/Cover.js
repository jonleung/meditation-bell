import React, { useState, useEffect } from 'react';

const Cover = (props) => {
  const [isVisible, setIsVisible] = useState(props.on);

  function hide() {
    setIsVisible(false);
  }

  return (
    <div className={`Cover ${isVisible ? 'show' : 'hide'}`} onClick={hide}>
      <div className="Cover__button">
        <p className="Cover__button-text">1) Set your computer's speaker to maximum volume.</p>
        <br/>
        <p className="Cover__button-text">2) Share your computer sound in Zoom.</p>
        <br/>
        <p className="Cover__button-text">3) Then click anywhere to continue.</p>
      </div>
    </div>
  );
}

export default Cover
