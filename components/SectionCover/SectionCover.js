import React from 'react';
import PropTypes from 'prop-types';

function getFontSize(width) {
    const result = {
        titleFontSize: 47
    };
    if (width <= 690) {
        result.titleFontSize = 40;
    }
    return result;
}


class SectionCover extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            titleFontSize: 47,
            filled: false
        };
    }

    componentDidMount() {
        let resizeTimer = 0;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const width = parseInt(window.getComputedStyle(this.refs.root).width, 10);
                const nextState = getFontSize(width);
                nextState.filled = width <= 568;
                this.setState(nextState);
            }, 300);
        }, {
            passive: true
        });
        const width = parseInt(window.getComputedStyle(this.refs.root).width, 10);
        const nextState = getFontSize(width);
        nextState.filled = width <= 568;
        this.setState(nextState);
    }

    render() {
        const {className, style, title, subTitle, children} = this.props;
        const {titleFontSize, filled} = this.state;
        return (
            <div className={`section-cover${filled ? ' section-cover--filled' : ''} ${className}`} style={style} ref="root">
                <div className="section-cover__inner">
                    <div className="section-cover__header">
                        <h2 className="section-cover__main-title" style={{fontSize: titleFontSize}}>{title}</h2>
                        <p className="section-cover__sub-title">{subTitle}</p>
                    </div>
                    <div className="section-cover__body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

SectionCover.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

SectionCover.defaultProps = {
    className: '',
    style: {}
};

export default SectionCover;