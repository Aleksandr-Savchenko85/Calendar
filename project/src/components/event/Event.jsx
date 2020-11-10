import React, {useState}from 'react';
import './event.scss';
import PropTypes from 'prop-types';
import {deleteTask} from '../../gateway/events';

const Event = ({ title, time, id}) => {
 
        
        const handleDeleteEvent = (id) =>{
        deleteTask(id)
      
      
    }       
 
       return (
        <div className="event" >
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
            <button className='delete-event-btn'  onClick={()=>handleDeleteEvent(id)}>delete</button>
        </div >
    )
}


export default Event;