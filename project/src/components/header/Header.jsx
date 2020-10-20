import React, { useState } from 'react';

import { months } from '../../utils/dateUtils.js';

import './header.scss';


const Header = () => {


    const [weekdays, setWeekDays] = useState(month)


    let date = new Date();

    let numberOfWeek = date.getDate();
    let month = date.getMonth();


    //console.log(numberOfWeek)
    //console.log(month)





    return (
        <header className="header">
            <button className="button create-event-btn" onClick={() => console.log('Hello create new event')}>
                <i className="fas fa-plus create-event-btn__icon"></i>
                Create
            </button>
            <div className="navigation">
                <button className="navigation__today-btn button" onClick={() => console.log('Hello go today')}>
                    Today
                </button>
                <button className="icon-button navigation__nav-icon" onClick={() => setWeekDays(weekdays + 7)}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="icon-button navigation__nav-icon" onClick={() => console.log('Hello go to next')}>

                    <i className="fas fa-chevron-right"></i>
                </button>
                <span className="navigation__displayed-month">{months[month]}</span>
            </div>
        </header>
    )
}

export default Header;