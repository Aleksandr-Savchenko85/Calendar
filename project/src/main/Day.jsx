import React from 'react'

const Day = () => {
    let arrDay = [];
    for (let i = 0; i <= 24; i++) {
        arrDay.push(<div id="1" className="week__day__hour" key={i}></div>)

    }

    return (
        arrDay

    )
};

export default Day;