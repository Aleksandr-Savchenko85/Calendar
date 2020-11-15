import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, addDays, currentDate } from '../src/utils/dateUtils.js';
import './common.scss';
import Modal from './components/modal/Modal.jsx';
import { getTask } from '..//src/gateway/events';

const App = () => {

    const [weekStartDate, setWeekStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState([]);

    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    useEffect(() => {
        getTask().then(response => {
            setEvent(response)
        })
    }, []
    );

    useEffect(() => {
        getTask().then(responce => {
            setEvent(responce)
        })
    }, [event.length]
    );

    const refresh = (task) => {
        setEvent([...event, task])

    };

    const refreshPage = () => {
        getTask().then(responce => {
            setEvent(responce)
        })

    };

    const handleOnDelete = () => {
        getTask().then(responce => {
            setEvent(responce)
        })
    };

    const goPrev = () => {
        setWeekStartDate(addDays(weekStartDate, -7))
    };

    const goNext = () => {
        setWeekStartDate(addDays(weekStartDate, +7))
    };

    const toDay = () => {
        setWeekStartDate(currentDate())
    };

    const showForm = () => {
        setIsOpen(true)

    };

    const hideForm = () => {
        setIsOpen(false)
    };

    return (
        <>

            <Header
                showForm={showForm}
                toDay={toDay}
                goNext={goNext}
                goPrev={goPrev}
                weekDates={weekDates}
                weekStartDate={weekStartDate}
            />
            <Modal
                isOpen={isOpen}
                hideForm={hideForm}
                refresh={refresh}
            />
            <Calendar
                weekDates={weekDates}
                weekStartDate={weekStartDate}
                events={event}
                handleOnDelete={handleOnDelete}
                refreshPage={refreshPage}
            />
        </>
    )

}

export default App;


