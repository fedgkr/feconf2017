import React from 'react';
import PropTypes from 'prop-types';

const Placard = ({className, style, title, subTitle, html, children}) => (
    <section className={`placard ${className}`} style={style}>
        <div className="placard__inner">
            <div className="placard__card">
                <div className="placard__cover">
                    <h2 className="placard__title">{title}</h2>
                    <p className="placard__sub-title">{subTitle}</p>
                </div>
                <div className="placard__body">
                    {html ? <div dangerouslySetInnerHTML={{__html: html}}/> : null}
                    {children}
                </div>
            </div>
        </div>
    </section>
);

Placard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    html: PropTypes.string
};

Placard.defaultProps = {
    className: '',
    style: {}
};

export default Placard;
