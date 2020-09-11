import React from "react";
import MainBoard from './main/MainBoard';
import HeaderMain from './header/HeaderMain';
import Week from './main/Week';
import moment from 'moment';

class App extends React.Component {
  state = {
    currentDate: moment(),

  }

  

  render() {
    return (
      <div className="calendar">
        <HeaderMain />
        <MainBoard />
      </div>


    )
  }


};

export default App;




