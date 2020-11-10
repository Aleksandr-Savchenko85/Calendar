import React, { useState } from 'react';
import './modal.scss';
import { createNewTask} from '../../gateway/events';


const Modal = ({ isOpen, hideForm, refresh }) => {

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
        refresh(task);
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


    if (!isOpen) {
        return null
    }


    return (
        <div className="modal overlay">

            <div className="modal__content">
                <div className="create-event">
                    <button className="create-event__close-btn" onClick={hideForm}>+</button>

                    <form className="event-form" onSubmit={handleSubmit}>
                        <input type="text"
                            name="title"
                            placeholder='title'
                            className="event-form__field"
                            onChange={handleChange}
                            required minLength="3" maxLength="25"
                        />
                        <div className="event-form__time">

                            <input type="date"
                                name="date"
                                className="event-form__field"
                                onChange={handleChange}
                                required
                            />
                            <input type="time"
                                name="startTime"
                                className="event-form__field"
                                onChange={handleChange}
                                required

                            />
                            <span>-</span>
                            <input type="time"
                                name="endTime"
                                className="event-form__field"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea name="description"
                            placeholder=""
                            onChange={handleChange}
                            className="event-form__field">

                        </textarea>

                        <button type="submit" className="event-form__submit-btn" >Create</button>
                    </form>
                </div>
            </div>
        </div>

    )



}



export default Modal;




