import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import RedLine from '..//redLine/RadLine';
import { currentDate } from '../../utils/dateUtils';


const Day = ({ dataDay, dayEvents, handleOnDelete, refreshPage, weekStartDate, weekDates }) => {
const currentSlot = weekStartDate.getDate()

    //console.log(currentSlot)
    //console.log(weekStartDate.getDate())

    const hours = Array(24).fill().map((val, index) => index < 10 ? `0${index}` : `${index}`);
    
    return (
        
        <div className="calendar__day" data-day={dataDay}>
              <RedLine 
              currentSlot={currentSlot}
              weekStartDate={weekStartDate}
              />

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

                    /> 

                )

            })}
        </div>
    )
}

export default Day;