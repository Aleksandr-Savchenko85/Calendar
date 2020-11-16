import React, { useState, useEffect } from 'react';
import '../calendar/calendar.scss';



const getDistance = () => {
  const top = new Date().getHours() * 59 + new Date().getMinutes();
  return `${top}px`
}
const RedLine = () => {
  const [time, setTime] = useState(getDistance());

  //console.log(time)
  useEffect(() => {
    let intervalID = setInterval(() => {
      setTime(time)
    }, 60000)
    clearInterval(intervalID)

  });

  useEffect(()=>{
    setTime(time)
  },[time])

  const style = {
    top: time,
  };

  return (
    <div style={style} className="red-line"></div>
  )

}

export default RedLine;