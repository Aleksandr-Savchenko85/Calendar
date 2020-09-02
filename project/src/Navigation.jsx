import React from 'react';
import moment from 'moment';

const Navigation = () => {
    return (

        <div className="calendar-header">

            <div className="calendar__day-label day-label">
                <div className="day-name">MON</div>
                <div className="day-number">25</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-name">TUE</div>
                <div className="day-number">26</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-name">WED</div>
                <div className="day-number">27</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-name">THU</div>
                <div className="day-number">28</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-name">FRI</div>
                <div className="day-number">29</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-name">SAT</div>
                <div className="day-number">30</div>
            </div>
            <div className="calendar__day-label day-label">
                <div className="day-name">SUN</div>
                <div className="day-number">31</div>
            </div>
        </div>
    )
};


export default Navigation;