import React from 'react';
import PropTypes from 'prop-types';

const SectionCoverBasic = ({title, subTitle}) => (
    <div className="section__cover section__cover--basic">
        <h2 className="section__title">{title}</h2>
        <p className="section__sub-title">{subTitle}</p>
    </div>
);

SectionCoverBasic.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default SectionCoverBasic;
