import React from 'react';
import Event from '../event/Event';
//import { formatMins } from '../../../src/utils/dateUtils.js';


const Hour = ({ dataHour, hourEvents, handleOnDelete, refreshPage}) => {


    return (
        <div className="calendar__time-slot" data-time={dataHour + 1}  >
           
            {hourEvents.map(({ id, title, startTime, endTime }) => {
              

                return (
                 
                    <Event
                        id={id}
                        key={id}
                        time={`${startTime} - ${endTime}`}
                        title={title}
                        handleOnDelete={handleOnDelete}
                        refreshPage={refreshPage}
                        
                    />
                   
                )
            })}
        </div>
    )
}

export default Hour;