import React from 'react';
import './event.scss';

import { deleteTask } from '../../gateway/events';


const Event = ({ title, time, id }) => {

    const resetPage = () => {
        return location.reload()
    }

    const handleDeleteEvent = (id) => {
        deleteTask(id);
        resetPage();


    }

    return (
        <div className="event" >
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
            <button className='delete-event-btn' onClick={() => handleDeleteEvent(id)}>delete</button>
        </div >
    )
}


export default Event;