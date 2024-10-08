import React from 'react'
import CountdownTimer from './CountdownTimer'

function Event() {
    // const Eventdate="2024-04-30T23:59:59"
    const Eventdate=Date.now().toString();
  return (
    <>
     <CountdownTimer eventDate={Eventdate} />
    </>
  )
}

export default Event