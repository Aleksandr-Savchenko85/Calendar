import React from "react";
import HeaderNavigation from './HeaderNavigation';
import Day from '../main/Day';

const HeaderMain = () => {
    return (
        <div className="header">
        <HeaderNavigation/>
        <div className="header-main">
            <div className="header-main__gtm-table">
                <span className="header-main__gtm-table__text">GTM+ 2</span>
            </div>

            <ul className="header-main__week">
            <li className="header-main__week__day">
            <span className="header-main__week__day-name">Mon</span>
            <span className="header-main__week__day-date">01</span>

        </li>
        <li className="header-main__week__day">
            <span className="header-main__week__day-name">Tue</span>
            <span className="header-main__week__day-date">02</span>
        </li>
        <li className="header-main__week__day">
            <span className="header-main__week__day-name">Wed</span>
            <span className="header-main__week__day-date">03</span>
        </li>
        <li className="header-main__week__day">
            <span className="header-main__week__day-name">Thu</span>
            <span className="header-main__week__day-date">04</span>
        </li>
        <li className="header-main__week__day">
            <span className="header-main__week__day-name">Fri</span>
            <span className="header-main__week__day-date">05</span>
        </li>
        <li className="header-main__week__day">
            <span className="header-main__week__day-name">Sat</span>
            <span className="header-main__week__day-date">06</span>
        </li>
        <li className="header-main__week__day">
            <span className="header-main__week__day-name">Sun</span>
            <span className="header-main__week__day-date">07</span>
        </li>
            </ul>
        </div>





    </div>
    )
};

export default HeaderMain;