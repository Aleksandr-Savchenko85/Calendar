import React from 'react';
import Hour from '../hour/Hour';
import Event from '..//event/Event';
import './day.scss';


const Day = ({ dataDay, dayEvents }) => {
    const hours = Array(24).fill().map((val, index) => index);

    return (
        <div className="calendar__day" data-day={dataDay}>
            {hours.map(hour => {
                //getting all events from the day we will render
                const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);
                    //console.log(hours)
                return (
                    <Hour
                        key={dataDay + hour}
                        dataHour={hour}
                        hourEvents={hourEvents}>
                        {/* <Event /> */}

                    </Hour>





                )
            })}
        </div>
    )
}

export default Day;