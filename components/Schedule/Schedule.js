import React from 'react';
import PropTypes from 'prop-types';

const Schedule = ({className, style, schedule}) => (
    <div className={`schedule ${className}`} style={style}>
        <div className="schedule__inner">
            <ul className="schedule__list">
                {schedule.map(({icon, title, startTime, endTime, location}, index) =>
                    <li className="schedule__item" key={index}>
                        <div className="schedule__information">
                            <i className={`schedule__ico schedule__ico--${icon}`}/>
                            <h4 className="schedule__title">{title}</h4>
                            {location.length > 0 ?
                                <p className="schedule__location">
                                    {location.map((value, index) =>
                                        <span key={index}>{value}</span>
                                    )}
                                </p>
                             : null}
                        </div>
                        <div className="schedule__time">
                            <time className="schedule__start-time">{startTime}</time>
                            <time className="schedule__end-time">~{endTime}</time>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    </div>
);

Schedule.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.string,
    schedule: PropTypes.array.isRequired
};

Schedule.defaultProps = {
    className: '',
    style: {},
    icon: 'circle'
};

export default Schedule;
