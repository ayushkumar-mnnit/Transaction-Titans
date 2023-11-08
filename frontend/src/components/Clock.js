// Clock.js

import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="clock">
      <span>{formattedTime}</span>
    </div>
  );
}

export default Clock;
