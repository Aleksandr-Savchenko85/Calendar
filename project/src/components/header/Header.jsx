import React, { useState } from 'react';
import generateWeekRange from '../../utils/dateUtils.js';
import { months } from '../../utils/dateUtils.js';

import './header.scss';


const Header = ({ goPrev, goNext, toDay, weekDates, showForm }) => {

    //console.log(weekDates)
    let currentMonth = new Date().getMonth(); // current month
    //console.log(months[currentMonth+1]) //October
    //let nextMonthAfterCurrent = months[currentMonth + 1] // next month after current 
    let nameMonthFirstDayOfWeek = months[weekDates[0].getMonth()];
    //console.log(nameMonthFirstDayOfWeek)
    let nameMonthLastDayOfWeek = months[weekDates[6].getMonth()];
    //console.log(nameMonthLastDayOfWeek)

    return (
        <header className="header">
            <button className="button create-event-btn" onClick={showForm}>
                <i className="fas fa-plus create-event-btn__icon"></i>
                Create
            </button>
            <div className="navigation">
                <button className="navigation__today-btn button" onClick={toDay}>
                    Today
                </button>
                <button className="icon-button navigation__nav-icon" onClick={goPrev} >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="icon-button navigation__nav-icon" onClick={goNext}>

                    <i className="fas fa-chevron-right"></i>
                </button>
                <span className="navigation__displayed-month">

                    {nameMonthFirstDayOfWeek === nameMonthLastDayOfWeek
                        ? nameMonthFirstDayOfWeek
                        : nameMonthFirstDayOfWeek + ' - ' + nameMonthLastDayOfWeek}

                </span>
            </div>
        </header>
    )
}

export default Header;



/* background-color: red; // style for active currend date
color: white;
width: 50px;
align-items: center;
justify-content: center;
display: flex;
height: 50px;
border-radius: 30px; */