import React from 'react';
import Day from '../day/Day';
import './week.scss';
import moment from "moment";
const Week = ({ weekDates, events, handleOnDelete, refreshPage, weekStartDate }) => {

    return (
        <div className="calendar__week">

            {weekDates.map(dayStart => {
                const dayEvents = events.filter(event => event.date === moment(dayStart).format("YYYY-MM-DD"));

                return (
                    <Day
                        weekStartDate={weekStartDate}
                        weekDates={weekDates}
                        key={dayStart.getDate()}
                        dataDay={dayStart.getDate()}
                        dayEvents={dayEvents}
                        handleOnDelete={handleOnDelete}
                        refreshPage={refreshPage}></Day>

                )
            })}
        </div>
    )
}

export default Week;