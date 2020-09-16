import React from 'react';


const DayofWeek = () => {

    let arrDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    return (
        arrDay.map((item) => 
            <li className="header-main__week__day" >
                <span className="header-main__week__day-name">{item}</span>
                <span className="header-main__week__day-date" >01</span>

            </li>

        
)

    )
};

export default DayofWeek;