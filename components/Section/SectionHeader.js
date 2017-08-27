import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({type, title, subTitle, children}) => type === 'basic' ? (
    <div className="section__header section__header--basic">
        <h2 className="section__title">{title}</h2>
        <p className="section__sub-title">{subTitle}</p>
    </div>
) : (
    <div className="section__header section__header--card">
        <div className="section__cover">
            <h2 className="section__title">{title}</h2>
            <p className="section__sub-title">{subTitle}</p>
        </div>
        <div className="section__cover-body">
            {children}
        </div>
    </div>
);

SectionHeader.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

SectionHeader.defaultProps = {
    type: 'basic'
};

export default SectionHeader;
