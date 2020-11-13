import React, { useState, useEffect } from 'react';
import '../calendar/calendar.scss';
import moment from 'moment';

const currentDay = moment().format("YYYY-MM-DD");


//console.log(key)
/* const MarginTop = () => {
  const size = new Date().getHours() * 60 + new Date().getMinutes();
  return `${size}px`
}  */
//console.log(new Date().getHours() * 60 + new Date().getMinutes())



const RedLine = () => {
    const [size, setSize] = useState(new Date().getHours() * 60 + new Date().getMinutes());

    useEffect(() => {
        setInterval(() => {
            setSize(size(+ 100))
        }, 2000)
    })
    return (
        <div className="red-line">{size}</div>
    )


}
export default RedLine;