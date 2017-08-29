import React from 'react';
import PropTypes from 'prop-types';

const Section = ({className, style, tag, title, subTitle, children}) => (
    React.createElement(tag, {
        className: `section ${className}`,
        style
    }, (
        <div className="section__inner">
            {title || subTitle ?
                <div className="section__header">
                    {title ? <h2 className="section__title">{title}</h2> : null}
                    {subTitle ? <p className="section__sub-title">{subTitle}</p> : null}
                </div>
                : null}
            <div className="section__body">
                {children}
            </div>
        </div>
    ))
);

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    tag: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string
};

Section.defaultProps = {
    className: '',
    style: {},
    tag: 'section'
};

export default Section;
