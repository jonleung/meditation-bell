import React, { useState, useEffect } from 'react';

const Cover = (props) => {
  const [messageNumber, setMessageNumber] = useState(0);

  function increment() {
    setMessageNumber(messageNumber+1);
  }

  const MESSAGES = [
    "1) Disable computer notifications",
    "2) Close any programs that make sound",
    "3) Set your computer's volume to max",
    "4) Share your computer sound in Zoom"
  ]

  return (
    <div className={`Cover ${messageNumber < MESSAGES.length ? 'show' : 'hide'}`}>
        <div className="Cover__plaque">
          <p className="Cover__plaque-text">
            {MESSAGES[messageNumber]}
          </p>
          <button onClick={increment} className="Cover__button">
            {messageNumber === MESSAGES.length - 1 ? 'Done' : 'Next'}
          </button>
        </div>
    </div>
  );
}

export default Cover
