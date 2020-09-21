import React from 'react';
import { months } from '../../utils/dateUtils.js';
import './header.scss';
import {goNext, goPrev} from '../../App'

const Header = (props) => {
    
    return (
        <header className="header">
            <button className="button create-event-btn">
                <i className="fas fa-plus create-event-btn__icon"></i>Create
            </button>
            <div className="navigation">
                <button className="navigation__today-btn button" >
                    Today
                </button>
                <button className="icon-button navigation__nav-icon" onClick={props.goPrev}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="icon-button navigation__nav-icon" onClick={props.goNext}>
                    <i className="fas fa-chevron-right"></i>
                </button>
                <span className="navigation__displayed-month">September</span>
            </div>
        </header>
    )
}

export default Header;