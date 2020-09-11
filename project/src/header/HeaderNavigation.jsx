import React from "react";
import ButtonCreate from './ButtonCreate';
import ButtonToday from './ButtonToday';
import ButtonsNavigation from './ButtonsNavigation';
import MonthText from './MonthText';




const HeaderNavigation = () => {
  return (

    <div className="header-navigation">
     <>
     <ButtonCreate/>
     <ButtonToday/>
     <ButtonsNavigation/>
     <MonthText/>
     </>


    </div>
  );
};

export default HeaderNavigation;
