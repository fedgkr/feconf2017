import React from 'react';
import PropTypes from 'prop-types';

const SectionCover = ({className, style, title, subTitle, children}) => (
    <div className={`section-cover ${className}`} style={style}>
        <div className="section-cover__inner">
            <div className="section-cover__header">
                <h2 className="section-cover__main-title">{title}</h2>
                <p className="section-cover__sub-title">{subTitle}</p>
            </div>
            <div className="section-cover__body">
                {children}
            </div>
        </div>
    </div>
);

SectionCover.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

SectionCover.defaultProps = {
    className: '',
    style: {}
};

export default SectionCover;