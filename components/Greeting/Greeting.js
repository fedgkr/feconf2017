import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({title, desc, onClick}) => (
    <div className="greeting">
        <div className="greeting__inner">
            <div className="greeting__description">
                <h2 className="greeting__title">{title}</h2>
                <p className="greeting__desc">{desc}</p>
                <button onClick={onClick}>Click</button>
            </div>
        </div>
    </div>
);

Greeting.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    onClick: PropTypes.func
};

Greeting.defaultProps = {
    title: 'Hello React App',
    desc: 'Let\'s create super awesome react application.',
    onClick: null
};

export default Greeting;
