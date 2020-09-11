import React from "react";
import TimeHours from './TimeHours';
import Week from './Week'

const MainBoard =()=>{
    return(
        <div className="main-board">
            <TimeHours/>
            <Week/>
        </div>

    )
};


export default MainBoard;