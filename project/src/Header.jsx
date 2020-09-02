import React from 'react';


const Header = ({goNext, goPrev, returnToday}) => {
    return (
        <header className="header">
            <button className="button-create"><i className="fas fa-plus create-event-btn__icon"></i>Create</button>
            <div className="navigation-header">
                <button className="button-today" onClick ={returnToday} data-direction="today">Today</button>
                <button className="pointer_left" onClick ={goPrev} data-direction="prev"><i className="fas fa-chevron-left"></i></button>
                <button className="pointer_right"onClick ={goNext}  data-direction="next"><i className="fas fa-chevron-right"></i></button>
                <span className="text-month">August</span>
            </div>
        </header>




    )
};


export default Header;