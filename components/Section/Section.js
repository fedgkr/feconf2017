import React from 'react';
import PropTypes from 'prop-types';

const Section = ({className, style, title, subTitle, children}) => (
    <div className={`section ${className}`} style={style}>
        <div className="section__inner">
            <div className="section__header">
                <h2 className="section__title">{title}</h2>
                <p className="section__sub-title">{subTitle}</p>
            </div>
            <div className="section__body">
                {children}
            </div>
        </div>
    </div>
);

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

Section.defaultProps = {
    className: '',
    style: {}
};

export default Section;
