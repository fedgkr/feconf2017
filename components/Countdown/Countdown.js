import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import leftPad from 'left-pad';

function getDiffTime(endTime, currTime = moment().unix()) {
    return endTime - currTime > 0 ? endTime - currTime : 0;
}

function getDuration(diffTime) {
    return moment.duration(diffTime, 'milliseconds')
}

class Countdown extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        eventTime: PropTypes.number.isRequired
    };

    static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            duration: getDuration(getDiffTime(props.eventTime) * 1000)
        };
    }

    componentDidMount() {
        const interval = 60000;
        const intervalTimer = setInterval(() => {
            const diffTime = getDiffTime(this.state.duration, interval);
            if (diffTime > 0) {
                this.setState({duration: getDuration(diffTime)});
            } else {
                clearInterval(intervalTimer);
            }
        }, interval);
    }

    render() {
        const {className, style} = this.props;
        const {duration} = this.state;
        const date = {
            days: leftPad(parseInt(duration.asDays(), 10), 2, '0').split(''),
            hours: leftPad(duration.hours(), 2, '0').split(''),
            minutes: leftPad(duration.minutes(), 2, '0').split('')
        };
        return (
            <div className={`countdown ${className}`} style={style}>
                <div className="countdown__inner">
                    {Object.keys(date).map((key, index) => [
                        <div key={key} className="countdown__hand">
                            <div className="countdown__lamp">{key}</div>
                            <div className="countdown__time">
                                <div className="countdown__count"><span>{date[key][0]}</span></div>
                                <div className="countdown__count"><span>{date[key][1]}</span></div>
                            </div>
                        </div>,
                        index <= 1 ? (
                            <div className="countdown__divider"/>
                        ) : null
                    ])}
                </div>
            </div>
        );
    }
}

export default Countdown;
