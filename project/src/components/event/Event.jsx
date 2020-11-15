import React from 'react';
import './event.scss';
import { deleteTask } from '../../gateway/events';
import PropTypes from 'prop-types';

const Event = ({ title, time, id, handleOnDelete, refreshPage }) => {

    const handleDelete = (id) => {
        deleteTask(id);
        handleOnDelete();
        refreshPage();

    }
    return (
        <div className="event" >
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
            <button className='delete-event-btn' onClick={() => handleDelete(id)}>delete</button>
        </div >
    )
}

export default Event;

Event.propTypes = {
    title: PropTypes.string,
    time: PropTypes.string,
    id: PropTypes.string,
    handleOnDelete: PropTypes.func,
    refreshPage: PropTypes.func,
}

