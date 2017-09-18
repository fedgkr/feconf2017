import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, style, tag, href, type, disabled, onClick, children}) => (
    React.createElement(tag, {
        className: `button${type ? ` button--${type}` : ''} ${className}`,
        href,
        style,
        onClick,
        disabled
    }, (
        <div className="button__inner">
            {children}
        </div>
    ))
);

Button.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    tag: PropTypes.string,
    type: PropTypes.string
};

Button.defaultProps = {
    className: '',
    style: {},
    tag: 'button',
    type: 'primary'
};

export default Button;
