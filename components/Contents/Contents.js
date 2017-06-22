import React from 'react';
import PropTypes from 'prop-types';

const Contents = ({className, title, children}) => (
    <section className={`contents ${className}`}>
        <div className="contents__inner">
            <h2 className="contents__title">
                {title}
            </h2>
            {children}
        </div>
    </section>
);

Contents.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
};

Contents.defaultProps = {
    className: ''
};

export default Contents;
