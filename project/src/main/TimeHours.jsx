import React from "react";

const TimeHours = () => {
    let hours = [];
    for (let i = 0; i <= 23; i++) {
        hours.push(<div className="time-hours__hour" key={i}><span className="time-hours__hour__text">{`${i}:00`}</span></div>)

    }
    return (
        <div className="time-hours">{hours}</div>


    )
};

export default TimeHours;