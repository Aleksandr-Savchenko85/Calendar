import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <button className="button-create"><i className="fas fa-plus create-event-btn__icon"></i>Create</button>
            <div className="navigation-header">
                <button className="button-today"  data-direction="today">Today</button>
                <button className="pointer_left"  data-direction="prev"><i className="fas fa-chevron-left"></i></button>
                <button className="pointer_right" data-direction="next"><i className="fas fa-chevron-right"></i></button>
                <span className="text-month">September</span>
            </div>
        </header>




    )
};


export default Header;