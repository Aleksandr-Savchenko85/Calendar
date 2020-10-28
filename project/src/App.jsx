import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, days } from '../src/utils/dateUtils.js';
import './common.scss';




const App = () => {

    const [weekStartDate, setWeekStartDate] = useState(new Date());

    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));





let goPrev =()=>{
    setWeekStartDate()
    
}


    

    //console.log(weekStartDate.getDate())


    return (
        <>
            <Header
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

