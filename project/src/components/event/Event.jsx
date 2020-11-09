import React from 'react';
import './event.scss';
import deleteTask from '../../gateway/events';
//console.log(events)
const Event = ({ title, time}) => {
  
    // const eventStyle = {
    //     height,
    //     marginTop
    // }

    return (
        <div className="event" >
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
            <button className='delete-event-btn'>delete</button>
        </div >
    )
}


export default Event;