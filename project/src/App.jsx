import React, { Component, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import Modal from './components/modal/Modal.jsx';



const App = () => {

    const [weekStartDate, setWeekStartDate] = useState(new Date);

        const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

   

    //console.log(weekStartDate);
    //console.log(weekDates);


    return (
        <>
            <Header weekDates={weekDates} weekStartDate={weekStartDate}/>
            <Calendar weekDates={weekDates} weekStartDate={weekStartDate} />
        </>
    )
}

export default App;

