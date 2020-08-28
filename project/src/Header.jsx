import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <button className="button create-event-btn"><i className="fas fa-plus create-event-btn__icon"></i>Create</button>
            <div className="navigation">

                <button data-direction="today" className="navigation__today-btn button">Today</button>

                <button data-direction="prev" className="icon-button navigation__nav-icon"><i
                    className="fas fa-chevron-left"></i>
                </button><button data-direction="next" className="icon-button navigation__nav-icon">
                    <i className="fas fa-chevron-right"></i>
                </button>
                <span className="text-month">August 2020</span>



            </div>

        </header>




    )
};


export default Header;