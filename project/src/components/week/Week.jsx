import React from 'react';
import Day from '../day/Day';
import './week.scss';
import moment from "moment";

const Week = ({ weekDates, events }) => {
    
    return (
        <div className="calendar__week">
            {weekDates.map(dayStart => {
                const dayEnd = moment(new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24)).format("YYYY-MM-DD");
           
                //getting all events from the day we will render
                const dayEvents = events.filter(event => event.date === moment(dayStart).format("YYYY-MM-DD"));
                //console.log( dayEvents )
                return (
                    <Day key={dayStart.getDate()} dataDay={dayStart.getDate()} dayEvents={dayEvents} />
                    
                )
            })}
        </div>
    )
}

export default Week;