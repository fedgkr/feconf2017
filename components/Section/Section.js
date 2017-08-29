import React from 'react';
import PropTypes from 'prop-types';

const Section = ({className, style, title, subTitle, children}) => (
    <section className={`section ${className}`} style={style}>
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
    </section>
);

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    subTitle: PropTypes.string
};

Section.defaultProps = {
    className: '',
    style: {}
};

export default Section;
