import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import RedLine from '..//redLine/RadLine';
import PropTypes from 'prop-types';


const Day = ({ dataDay, dayEvents, handleOnDelete, refreshPage, weekStartDate }) => {

    const currentCalendarDay = weekStartDate.getDate()
    const hours = Array(24).fill().map((val, index) => index < 10 ? `0${index}` : `${index}`);

    return (

        <div className="calendar__day" data-day={dataDay}>
            {currentCalendarDay == dataDay ? <RedLine /> : null}

            {hours.map(hour => {
                const hourEvents = dayEvents?.filter(event =>
                    event?.startTime.slice(0, 2) === hour)

                return (

                    <Hour
                        key={dataDay + hour}
                        dataHour={hour}
                        hourEvents={hourEvents}
                        handleOnDelete={handleOnDelete}
                        refreshPage={refreshPage}
                    />

                )

            })}
        </div>
    )
}

export default Day;

Day.propTypes = {
    dataDay: PropTypes.number,
    weekStartDate: PropTypes.object,
    dayEvents: PropTypes.array,
    handleOnDelete: PropTypes.func,
    refreshPage: PropTypes.func,
} 