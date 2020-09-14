import React from "react";
import HeaderNavigation from './HeaderNavigation';
import Day from '../main/Day';

const HeaderMain = () => {
    return (
        <div className="header">
        <HeaderNavigation/>
        <div className="header-main">
            <div className="header-main__gtm-table">
                <span className="header-main__gtm-table__text">GTM+ 2</span>
            </div>

            <ul className="header-main__week">
                <Day/>
            </ul>
        </div>





    </div>
    )
};

export default HeaderMain;