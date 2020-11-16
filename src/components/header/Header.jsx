import React, { useState } from 'react';
import { months } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';
import './header.scss';


const Header = ({ goPrev, goNext, toDay, weekDates, showForm }) => {

    let nameMonthFirstDayOfWeek = months[weekDates[0].getMonth()];
    let nameMonthLastDayOfWeek = months[weekDates[6].getMonth()];

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

Header.propTypes = {
    goPrev: PropTypes.func,
    goNext: PropTypes.func,
    toDay: PropTypes.func,
    weekDates: PropTypes.array,
    showForm: PropTypes.func,

}





