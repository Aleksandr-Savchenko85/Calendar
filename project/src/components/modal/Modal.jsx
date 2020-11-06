import React, { useState } from 'react';
import './modal.scss';
import { createNewTask, getTask, } from '../../gateway/events';


const Modal = ({ isOpen, hideForm }) => {

    const [task, setTask] = useState({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        description: ''
    });
    const clearInputs = () => setTask({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        description: ''
    });

    const handleSubmit = () => {
        event.preventDefault();
        createNewTask(task);
        clearInputs();
        hideForm();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask({
            ...task,
            [name]: value,
        });
    };



   //console.log(event)

    if (!isOpen) {
        return null
    }


    return (
        <div className="modal overlay">

            <div className="modal__content">
                <div className="create-event">
                    <button className="create-event__close-btn" onClick={hideForm}>+</button>

                    <form className="event-form">
                        <input type="text"
                            name="title"
                            placeholder='title'
                            className="event-form__field"
                            onChange={handleChange}
                        />
                        <div className="event-form__time">

                            <input type="date"
                                name="date"
                                className="event-form__field"
                                onChange={handleChange}
                            />
                            <input type="time"
                                name="startTime"
                                className="event-form__field"
                                onChange={handleChange}

                            />
                            <span>-</span>
                            <input type="time"
                                name="endTime"
                                className="event-form__field"
                                onChange={handleChange}
                            />
                        </div>
                        <textarea name="description"
                            placeholder=""
                            onChange={handleChange}
                            className="event-form__field">

                        </textarea>

                        <button type="submit" className="event-form__submit-btn" onClick={handleSubmit}>Create</button>
                    </form>
                </div>
            </div>
        </div>

    )



}



export default Modal;




