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

function getFontSize(width) {
    const result = {
        countFontSize: 68,
        lampFontSize: 18
    };
    if (width <= 320) {
        result.countFontSize = 38;
        result.lampFontSize = 14;
    } else if (width <= 380) {
        result.countFontSize = 48;
        result.lampFontSize = 16;
    } else if (width <= 460) {
        result.countFontSize = 58;
    }
    return result;
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
            duration: getDuration(getDiffTime(props.eventTime) * 1000),
            countFontSize: 68,
            lampFontSize: 18
        };
    }

    componentDidMount() {
        const interval = 60000;
        let resizeTimer = 0;
        const intervalTimer = setInterval(() => {
            const diffTime = getDiffTime(this.state.duration, interval);
            if (diffTime > 0) {
                this.setState({duration: getDuration(diffTime)});
            } else {
                clearInterval(intervalTimer);
            }
        }, interval);
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const width = parseInt(window.getComputedStyle(this.refs.root).width, 10);
                const nextFontSize = getFontSize(width);
                if (this.state.countFontSize !== nextFontSize.countFontSize) {
                    this.setState(nextFontSize);
                }
            }, 300);
        }, {
            passive: true
        });
        const width = parseInt(window.getComputedStyle(this.refs.root).width, 10);
        this.setState(getFontSize(width));
    }

    render() {
        const {className, style} = this.props;
        const {duration, lampFontSize, countFontSize} = this.state;
        const date = {
            days: leftPad(duration.days(), 2, '0').split(''),
            hours: leftPad(duration.hours(), 2, '0').split(''),
            minutes: leftPad(duration.minutes(), 2, '0').split('')
        };
        return (
            <div className={`countdown ${className}`} style={style} ref="root">
                <div className="countdown__inner">
                    {Object.keys(date).map((key, index) =>
                        <div key={key} className="countdown__time">
                            <div className="countdown__lamp" style={{fontSize: `${lampFontSize}px`}}>{key}</div>
                            <div className="countdown__date">
                                <div className="countdown__count"><span style={{fontSize: `${countFontSize}px`}}>{date[key][0]}</span></div>
                                <div className="countdown__count"><span style={{fontSize: `${countFontSize}px`}}>{date[key][1]}</span></div>
                            </div>
                            {index <= 1 ? (
                                <div className={`countdown__divider countdown__divider--${index === 0 ? 'first' : 'second'}`}/>
                            ) : null}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Countdown;
