import React, { useState, useEffect } from 'react';
import Day from '../day/Day';
import { getTask, deleteTask } from '../../gateway/events';
import './week.scss';


const Week = ({ weekDates, events }) => {
    const [event, setEvent] = useState([])


    useEffect(() => {
       getTask().then(responce=>{
           setEvent(responce)
       })
    }, [event.length]
    );

    useEffect(() => {
       getTask().then(responce=>{
           setEvent(responce)
       })
    }, []
    );


    

//console.log(eventss)


    return (
        <div className="calendar__week">
            {weekDates.map(dayStart => {
                const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

                //getting all events from the day we will render
                const dayEvents = events.filter(event => event.dateFrom > dayStart && event.dateTo < dayEnd);
                //console.log(dayEvents)
                return (
                    <Day key={dayStart.getDate()} dataDay={dayStart.getDate()} dayEvents={dayEvents} />
                )
            })}
        </div>
    )
}

export default Week;