import React from 'react'
import Hour from './Hour';


const Week = () => {
    let arrWeek = [];
    for (let i = 0; i <= 7; i++) {
        arrWeek.push(<div className="week__day" key={i}><Hour /></div>)

    }
    return (
        <div className="week">{arrWeek}</div>


    )
};


export default Week;