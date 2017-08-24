import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Countdown from '../Countdown';

class Hero extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: {}
    };

    componentDidMount() {

    }

    render() {
        const {className, style = {}} = this.props;
        return (
            <div className={`hero ${className}`} style={style} ref="root">
                <div className="hero__inner">
                    <div className="hero__countdown">
                        <Countdown eventTime={moment('2017-10-21 10:00:00').unix()}/>
                    </div>
                    <div className="hero__background">
                        <div className="hero__image"/>
                        <h1 className="hero__title blind">Welcome to FEConf 2017</h1>
                    </div>
                    <div className="hero__astronaut"/>
                </div>
            </div>
        );
    }
}

export default Hero;
