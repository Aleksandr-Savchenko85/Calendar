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
                        
                        <div className="calendar_hours-time">00:00</div>
                        <div className="calendar_hours-time">01:00</div>
                        <div className="calendar_hours-time">02:00</div>
                        <div className="calendar_hours-time">03:00</div>
                        <div className="calendar_hours-time">04:00</div>
                        <div className="calendar_hours-time">05:00</div>
                        <div className="calendar_hours-time">06:00</div>
                        <div className="calendar_hours-time">07:00</div>
                        <div className="calendar_hours-time">08:00</div>
                        <div className="calendar_hours-time">09:00</div>
                        <div className="calendar_hours-time">10:00</div>
                        <div className="calendar_hours-time">11:00</div>
                        <div className="calendar_hours-time">12:00</div>
                        <div className="calendar_hours-time">13:00</div>
                        <div className="calendar_hours-time">14:00</div>
                        <div className="calendar_hours-time">15:00</div>
                        <div className="calendar_hours-time">16:00</div>
                        <div className="calendar_hours-time">17:00</div>
                        <div className="calendar_hours-time">18:00</div>
                        <div className="calendar_hours-time">19:00</div>
                        <div className="calendar_hours-time">20:00</div>
                        <div className="calendar_hours-time">21:00</div>
                        <div className="calendar_hours-time">22:00</div>
                        <div className="calendar_hours-time">23:00</div>

                    </div>
    )
    
} 
export default Sidebar