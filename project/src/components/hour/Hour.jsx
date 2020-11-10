import React from 'react';
import Event from '../event/Event';
//import { formatMins } from '../../../src/utils/dateUtils.js';


const Hour = ({ dataHour, hourEvents }) => {


    return (
        <div className="calendar__time-slot" data-time={dataHour + 1}>
            {/* if no events in the current hour nothing will render here */}
            {hourEvents.map(({ id, title, startTime, endTime }) => {
                // const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
                // const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

                return (
                    <Event
                        id={id}
                        key={id}
                        time={`${startTime} - ${endTime}`}
                        title={title}
                    />
                )
            })}
        </div>
    )
}

export default Hour;