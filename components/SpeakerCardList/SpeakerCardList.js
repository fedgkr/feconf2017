import React from 'react';
import PropTypes from 'prop-types';
import StackGrid from "react-stack-grid";

function getColumnWidth() {
    const width = document.documentElement.offsetWidth;
    if (width <= 375) {
        return 100;
    } else if (width <= 768) {
        return 50;
    }
    return 33.33;
}

class SpeakerCardList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object.isRequired
    };

    static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props) {
        super(props);
        this.timer = 0;
        this.grid = null;
        this.state = {columnWidth: getColumnWidth()};
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.setState({columnWidth: getColumnWidth()});
                this.grid.updateLayout();
            }, 300);
        }, {
            passive: true
        });
        setTimeout(() => this.grid.updateLayout(), 300);
    }

    render() {
        const {className, style, children} = this.props;
        const {columnWidth} = this.state;
        return (
            <div className={`speaker-card-list ${className}`} style={style}>
                <div className="speaker-card-list__inner">
                    <StackGrid
                        className="speaker-card-list__speaker-list"
                        component="ul"
                        gridRef={grid => this.grid = grid}
                        columnWidth={`${columnWidth}%`}
                        gutterWidth={10}
                        gutterHeight={24}
                    >
                        {children.map((child, index) => (
                            <li key={index} className="speaker-card-list__speaker">
                                {child}
                            </li>
                        ))}
                    </StackGrid>
                </div>
            </div>
        );
    }
}

export default SpeakerCardList;
