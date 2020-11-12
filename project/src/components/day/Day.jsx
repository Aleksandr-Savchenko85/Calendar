import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';


const Day = ({ dataDay, dayEvents, handleOnDelete, refreshPage}) => {
    const hours = Array(24).fill().map((val, index) => index < 10 ? `0${index}` : `${index}`);
    return (
        <div className="calendar__day" data-day={dataDay}>
            {hours.map(hour => {

                const hourEvents = dayEvents?.filter(event =>
                    event?.startTime.slice(0, 2) === hour)


                return (
                   
                    <Hour
                        key={dataDay + hour}
                        dataHour={hour}
                        hourEvents={hourEvents}
                        handleOnDelete={handleOnDelete}
                        refreshPage={refreshPage}
                        
                    ></Hour>
                    
                )

            })}
        </div>
    )
}

export default Day;