import React from 'react';
import { days } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates, weekStartDate }) => {

    const activeDay = weekStartDate.getDate();

    const stylesCurrentDay =
    {
        backgroundColor: 'blue',
        color: 'white',
        width: '50px',
        alignItems: ' center',
        justifyContent: 'center',
        display: 'flex',
        height: '50px',
        borderRadius: '30px'
    };

    return (
        <header className="calendar__header">
            {weekDates.map(dayDate =>
                <div key={dayDate} className="calendar__day-label day-label">
                    <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
                    <span className="day-label__day-number" style={dayDate.getDate() === activeDay
                        ? stylesCurrentDay
                        : null}>{dayDate.getDate()}
                    </span>
                </div>

            )}

        </header>
    )
}

export default Navigation;

Navigation.propTypes = {
    weekDates: PropTypes.array,
    weekStartDate: PropTypes.object,

}
