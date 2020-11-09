import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';


const Day = ({ dataDay, dayEvents }) => {
    const hours = Array(24).fill().map((val, index) => index < 10 ? `0${index}`: `${index}`);
    return (
        <div className="calendar__day" data-day={dataDay}>
            {hours.map(hour => {
                //getting all events from the day we will render
                const hourEvents = dayEvents?.filter(event => 
                   event?.startTime.slice(0, 2) === hour)
                //    console.log(hourEvents)

                return (
                    <Hour
                        key={dataDay + hour}
                        dataHour={hour}
                        hourEvents={hourEvents}
                    ></Hour>
                )

            })}
        </div>
    )
}

export default Day;