import React, {useState, useEffect} from 'react';
import '../calendar/calendar.scss';

/* const lineSize =()=>{
    const size = newDate().getHours()*60 + newDate().getMinutes();
    return `${size}px`
} */


const RedLine = () => {
const [size, setSize] = useState(null);




    return (
        <div className="red-line"></div>
    )
};





export default RedLine;