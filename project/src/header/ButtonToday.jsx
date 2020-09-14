import React from "react";
import ButtonCreate from "./ButtonCreate";
import {showToday} from '../App';



const ButtonToday = () => {
    return (
        <button className="today-btn" onClick={showToday}>
            <span className="today-btn-text">Today</span>
        </button>
    )
};


export default ButtonToday;

