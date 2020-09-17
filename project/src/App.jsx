import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {

    state = {
        weekStartDate: new Date(),
        firstMondayNumber: 1,
    }

    goNext = () => {
        this.setState({
            firstMondayNumber: this.state.firstMondayNumber + 7,
        })
    }

    goPrev = () => {
        this.setState({
            firstMondayNumber: this.state.firstMondayNumber - 7,
        })
    }

    render() {
        const { weekStartDate } = this.state;
        const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

        return (<>
            <Header nextWeek={this.goNext}/>
            <Calendar weekDates={weekDates} />
        </>)
    }
};

export default App;