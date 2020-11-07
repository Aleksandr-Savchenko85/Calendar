import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';





const Calendar = ({ weekDates, weekStartDate, events }) => {



    return (
        <section className="calendar" >
            <Navigation
                weekDates={weekDates}
                weekStartDate={weekStartDate}

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


