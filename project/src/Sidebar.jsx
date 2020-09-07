import React from 'react';

const Sidebar = () => {
   /*  let hours = [];
    for (let i = 1; i <= 24; i++) {
        hours.push(<div classNameName="item-time-first-column" key={i}> <div classNameName='time-in-column'>{`${i}-00`}</div></div>);
    }
    return hours*/
    return(
        <div className="calendar__hours">
                        <div className="calendar_time-gtm">GMT+02</div>
                        <div className="calendar_hours-time"></div>
                        <div className="calendar_hours-time">12 AM</div>
                        <div className="calendar_hours-time">1 AM</div>
                        <div className="calendar_hours-time">2 AM</div>
                        <div className="calendar_hours-time">3 AM</div>
                        <div className="calendar_hours-time">4 AM</div>
                        <div className="calendar_hours-time">5 AM</div>
                        <div className="calendar_hours-time">6 AM</div>
                        <div className="calendar_hours-time">7 AM</div>
                        <div className="calendar_hours-time">8 AM</div>
                        <div className="calendar_hours-time">9 AM</div>
                        <div className="calendar_hours-time">10 AM</div>
                        <div className="calendar_hours-time">11 AM</div>
                        <div className="calendar_hours-time">12 PM</div>
                        <div className="calendar_hours-time">1 PM</div>
                        <div className="calendar_hours-time">2 PM</div>
                        <div className="calendar_hours-time">3 PM</div>
                        <div className="calendar_hours-time">4 PM</div>
                        <div className="calendar_hours-time">5 PM</div>
                        <div className="calendar_hours-time">6 PM</div>
                        <div className="calendar_hours-time">7 PM</div>
                        <div className="calendar_hours-time">8 PM</div>
                        <div className="calendar_hours-time">9 PM</div>
                        <div className="calendar_hours-time">10 PM</div>
                        <div className="calendar_hours-time">11 PM</div>

                    </div>
    )
    
} 
export default Sidebar