import React, { useState } from 'react';
import './modal.scss';


const Modal = ({ handleChange, isOpen, hideForm}) => {
    
    //const [title, setTitle] = useState('')
    //const [description, setDescription] = useState('')
    //const [timeStart, setTimeStart] = useState('')
    //const [timeFinish, setTimeFinish] = useState('')

    //console.log(isOpen)

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
                        />
                        <div className="event-form__time">

                            <input type="date"
                                name="date"
                                className="event-form__field"
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
                            />
                        </div>
                        <textarea name="description"
                            placeholder=""
                            className="event-form__field">
                        </textarea>

                        <button type="submit" className="event-form__submit-btn">Create</button>
                    </form>
                </div>
            </div>
        </div>

    )



}



export default Modal;




