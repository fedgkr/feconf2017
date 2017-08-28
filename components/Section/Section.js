import React from 'react';
import PropTypes from 'prop-types';

const Section = ({className, style, bg, children}) => (
    <div className={`section ${className} ${bg ? 'section--gradient' : ''}`} style={style}>
        <div className="section__inner">
            {children}
        </div>
    </div>
);

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    bg: PropTypes.string
};

Section.defaultProps = {
    className: '',
    style: {}
};

export default Section;
