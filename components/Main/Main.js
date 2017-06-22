import React from 'react';
import PropTypes from 'prop-types';

const Main = ({className, title, children}) => (
    <main className={`main ${className}`}>
        <div className="main__inner">
            {title ? (
                <h1 className="main__title">
                    {title}
                </h1>
            ) : null}
            {children}
        </div>
    </main>
);

Main.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
};

Main.defaultProps = {
    className: ''
};

export default Main;
