import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, days, addDays, currentDate } from '../src/utils/dateUtils.js';

import './common.scss';



const App = () => {

    const [weekStartDate, setWeekStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    //console.log(weekDates)

    const goPrev = () => {
        setWeekStartDate(addDays(weekStartDate, -7))
    }
    // console.log(weekStartDate)


    const goNext = () => {
        setWeekStartDate(addDays(weekStartDate, +7))
    }

    const toDay = () => {
        setWeekStartDate(currentDate())
    }

    const showForm =()=>{
        setIsOpen(isOpen(true))
    }

    //console.log(weekStartDate.getDate())
    
    


    return (
        <>
            <Header
                showForm={showForm}
                toDay={toDay}
                goNext={goNext}
                goPrev={goPrev}
                weekDates={weekDates}
                weekStartDate={weekStartDate}
            />
            <Calendar
                weekDates={weekDates}
                weekStartDate={weekStartDate}
            />
        </>
    )
}

export default App;

