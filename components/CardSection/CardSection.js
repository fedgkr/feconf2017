import React from 'react';
import PropTypes from 'prop-types';

const CardSection = ({className, style, title, subTitle, children}) => (
    <section className={`card-section ${className}`} style={style}>
        <div className="card-section__inner">
            <div className="card-section__card">
                <div className="card-section__cover">
                    <h2 className="card-section__title">{title}</h2>
                    <p className="card-section__sub-title">{subTitle}</p>
                </div>
                <div className="card-section__body">
                    {children}
                </div>
            </div>
        </div>
    </section>
);

CardSection.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

CardSection.defaultProps = {
    className: '',
    style: {}
};

export default CardSection;
