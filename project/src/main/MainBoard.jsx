import React from "react";
import TimeHours from './TimeHours';
import Week from './Week';
import Lines from './Lines';

const MainBoard = () => {
    return (
        <div className="main-board">
            <TimeHours />
            <Lines />
            <Week />


        </div>

    )
};


export default MainBoard;