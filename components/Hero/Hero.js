import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Countdown from '../Countdown';

const Hero = ({className, style, title, eventTime}) => (
    <div className={`hero ${className}`} style={style}>
        <div className="hero__inner">
            <div className="hero__countdown">
                <Countdown eventTime={moment(eventTime).unix()}/>
            </div>
            <div className="hero__background">
                <div className="hero__image"/>
                <h1 className="hero__title blind">{title}</h1>
            </div>
            <div className="hero__astronaut"/>
        </div>
    </div>
);

Hero.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    eventTime: PropTypes.string.isRequired
};

Hero.defaultProps = {
    className: '',
    style: {}
};

export default Hero;