import React from 'react';
import PropTypes from 'prop-types';

const SectionCoverCard = ({title, subTitle, children}) => (
    <div className="section__cover section__cover--card">
        <div className="section__cover-header">
            <h2 className="section__title">{title}</h2>
            <p className="section__sub-title">{subTitle}</p>
        </div>
        <div className="section__cover-body">
            {children}
        </div>
    </div>
);

SectionCoverCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default SectionCoverCard;
