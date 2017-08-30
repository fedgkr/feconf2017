import React from 'react';
import PropTypes from 'prop-types';

const Banners = ({className, style, list}) => (
    <div className={`banners ${className}`} style={style}>
        <div className="banners__inner">
            <ul className="banners__list">
                {list.map(({name, image, link}) =>
                    <li key={name} className="banners__item">
                        <a className="banners__link" href={link}>
                            <img className="banners__image" src={image} alt={`${name}'s banner image`}/>
                            <span className="banners__name blind">{name}</span>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    </div>
);

Banners.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    list: PropTypes.array.isRequired
};

Banners.defaultProps = {
    className: '',
    style: {}
};

export default Banners;
