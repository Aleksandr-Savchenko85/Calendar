import React, { useState } from 'react';

import { months} from '../../utils/dateUtils.js';

import './header.scss';


const Header = () => {
    

    //console.log(months)
   
    


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
                <button className="icon-button navigation__nav-icon" onClick={() => console.log('Hello go to prev')}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="icon-button navigation__nav-icon" onClick={() => console.log('Hello go to next')}>

                    <i className="fas fa-chevron-right"></i>
                </button>
                <span className="navigation__displayed-month">November</span>
            </div>
        </header>
    )
}

export default Header;