import React from "react";

const ModelForm = () => {
    return (
        
                <form className="model-form">
                    <button className="button-clouse">x</button>
                    <input type="text" name="title" placeholder="Text of event" className="event-form__field" />
                    <div className="event-form__time">
                        <input type="date" name="date" className="event-form__field" />
                        <input type="time" name="startTime" className="event-form__field" />
                      
                        <input type="time" name="endTime" className="event-form__field" />
                    </div>
                    <textarea name="description" placeholder="Description" className="event-form__field" rows="10" cols="45"></textarea>
                    <button type="submit" className="event-form__submit-btn">Save</button>
                </form>
           
    )
};


export default ModelForm;