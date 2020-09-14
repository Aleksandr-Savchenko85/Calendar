import React from "react";
import MainBoard from './Main/MainBoard';
import HeaderMain from './Header/HeaderMain';
import Week from './Main/Week';
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
export let showToday = ()=>{
  alert(new Date)
}

export default App;




