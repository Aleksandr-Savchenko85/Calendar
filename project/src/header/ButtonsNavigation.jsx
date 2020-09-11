import React from "react";
import {goPrev, goNext} from '../App'


const ButtonsNavigation = () => {
    return (
        <>
            <button className="prev-btn" ><i className="fas fa-chevron-left"></i></button>
            <button className="next-btn"><i className="fas fa-chevron-right"></i></button>
        </>
    )
};

export default ButtonsNavigation;