import React from 'react';
import Day from '../day/Day';
import './week.scss';
import moment from "moment";

const Week = ({ weekDates, events, handleOnDelete, refreshPage}) => {

    return (
        <div className="calendar__week">
            {weekDates.map(dayStart => {
                // const dayEnd = moment(new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24)).format("YYYY-MM-DD");

                const dayEvents = events.filter(event => event.date === moment(dayStart).format("YYYY-MM-DD"));

                return (

                    <Day 
                    key={dayStart.getDate()} 
                    dataDay={dayStart.getDate()} 
                    dayEvents={dayEvents}
                    handleOnDelete={handleOnDelete}
                    refreshPage={refreshPage}
                   
                    
                    />

                )
            })}
        </div>
    )
}

export default Week;