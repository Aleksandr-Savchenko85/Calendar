import React, { useState } from 'react';
import Model from '..//.//modal/Modal';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import './calendar.scss';




const Calendar = ({ weekDates }) => {

    const [event, setEvents] = useState(weekDates)
    //console.log(events)
    //console.log(weekDates)




    return (
        <section className="calendar" >
            <Navigation
                weekDates={weekDates}
             
            />
            <div className="calendar__body">
                <div className="calendar__week-container">
                    <Sidebar />
                   {/*   <Model/> */}
                    <Week weekDates={weekDates} events={events} />
                 
                </div>
            </div>
        </section>
    )
}
export default Calendar;


