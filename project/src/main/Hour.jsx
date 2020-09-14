import React from 'react'

const Hour = () => {
    let arrHour = [];
    for (let i = 0; i <= 24; i++) {
        arrHour.push(<div id="1" className="week__day__hour" key={i}></div>)

    }

    return (
        arrHour

    )
};

export default Hour;