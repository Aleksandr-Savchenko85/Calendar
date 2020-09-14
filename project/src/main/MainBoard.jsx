import React from "react";
import Hour from './Hour';
import Week from './Week';
import Lines from './Lines';

const MainBoard = () => {
    return (
        <div className="main-board">
            <Hour />
            <Lines />
            <Week />
        </div>

    )
};


export default MainBoard;