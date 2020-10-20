import React, { Component, useState } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import './calendar.scss';
import Modal from '../modal/Modal';



const Calendar = ({ weekDates }) => {
    const [events, setEvents] = useState(weekDates)

//console.log(events)
//console.log(weekDates)


    return (
        <section className="calendar">
            <Navigation
                weekDates={weekDates}

            />
            <div className="calendar__body">
                <div className="calendar__week-container">
                    <Sidebar />
                    <Week weekDates={weekDates} events={events} />
                </div>
            </div>
        </section>
    )
}
export default Calendar;


