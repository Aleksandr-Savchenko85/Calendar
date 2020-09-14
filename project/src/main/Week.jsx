import React from 'react'
import Day from './Day';


const Week = () => {
    let arrWeek = [];
    for (let i = 0; i <= 7; i++) {
        arrWeek.push(<div className="week__day" key={i}><Day /></div>)

    }
    return (
        <div className="week">{arrWeek}</div>


    )
};


export default Week;