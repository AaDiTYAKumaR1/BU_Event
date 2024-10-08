import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ eventDate }) => {
  
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={interval} style={{marginRight:'6px',backgroundColor:'pink',padding:'6px',borderRadius:'16px',fontWeight:'bold',color:'#333'}}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });
  return (
    <div >
      {timerComponents.length ? (
        <div >
          <h1 >Countdown to the Event:</h1>
          <div style={{color:'black',borderRadius:'12px',height:'48px',fontSize:'36px',width:'850px',position:'relative', right:'88px'}}>{timerComponents}</div>
        </div>
      ) : (
        <h1>Event is over!</h1>
      )}
    </div>
  );
};

export default CountdownTimer;
