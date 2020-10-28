import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, days, addDays } from '../src/utils/dateUtils.js';
import './common.scss';




const App = () => {

    const [weekStartDate, setWeekStartDate] = useState(new Date());

    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    const goPrev = () => {
        setWeekStartDate(addDays(weekStartDate, -7))
    }
    console.log()

    const goNext = () => {
        setWeekStartDate(addDays(weekStartDate, +7))
    }
    const toDay = () => {
        setWeekStartDate(addDays(weekStartDate))
    }

    //console.log(weekStartDate.getDate())


    return (
        <>
            <Header
                toDay={toDay}
                goNext={goNext}
                goPrev={goPrev}
                weekDates={weekDates}
                weekStartDate={weekStartDate} />
            <Calendar
                weekDates={weekDates}
                weekStartDate={weekStartDate} />
        </>
    )
}

export default App;

