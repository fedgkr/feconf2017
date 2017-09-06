import React from 'react';
import PropTypes from 'prop-types';

const SpeakerCard = ({className, style, picture, name, company, desc}) => (
    <div className={`speaker-card ${className}`} style={style}>
        <div className="speaker-card__inner">
            <div className="speaker-card__avatar">
                <img className="speaker-card__photo" src={picture} alt={`${name}'s picture`}/>
            </div>
            <div className="speaker-card__profile">
                <h4 className="speaker-card__name">{name}</h4>
                <p className="speaker-card__company"><a href={company.link}>{company.name}</a></p>
                <p className="speaker-card__greeting">{desc}</p>
            </div>
        </div>
    </div>
);

SpeakerCard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
    desc: PropTypes.string.isRequired
};

SpeakerCard.defaultProps = {
    className: '',
    style: {}
};

export default SpeakerCard;
