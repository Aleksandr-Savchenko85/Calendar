import React from 'react';

const Navigation = () => {
    return (

        <header className="calendar__header">

            <div className="calendar__day-label day-label">
                <div className="day-label__day-name">MON</div>
                <div className="day-label__day-number">25</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-label__day-name">TUE</div>
                <div className="day-label__day-number">26</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-label__day-name">WED</div>
                <div className="day-label__day-number">27</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-label__day-name">THU</div>
                <div className="day-label__day-number">28</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-label__day-name">FRI</div>
                <div className="day-label__day-number">29</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-label__day-name">SAT</div>
                <div className="day-label__day-number">30</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-label__day-name">SUN</div>
                <div className="day-label__day-number">31</div>
            </div>

        </header>
    )
};


export default Navigation;