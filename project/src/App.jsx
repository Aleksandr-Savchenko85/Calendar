import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, addDays, currentDate } from '../src/utils/dateUtils.js';
import './common.scss';
import Modal from './components/modal/Modal.jsx';
import { getTask, deleteTask } from '..//src/gateway/events';




const App = () => {

    const [weekStartDate, setWeekStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState([]);

    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
    console.log(event)
    //console.log(weekDates)

    useEffect(() => {
        getTask().then(responce => {
            setEvent(responce)
        })
    }, [event.length]
    );

    useEffect(() => {
        getTask().then(responce => {
            setEvent(responce)
        })
    }, []
    );

    const refresh = () => {
        getTask().then(responce => {
            console.log(responce)
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
                refresh={() =>  refresh()
                }
            />


            <Calendar
                weekDates={weekDates}
                weekStartDate={weekStartDate}


            />
        </>
    )


}

export default App;


//style for active data
/* const style = {
    color: 'white',
    width: '50px',
    alignItems: ' center',
    justifyContent: 'center',
    display: 'flex',
    height: '50px',
    borderRadius: '30px'
}
 */