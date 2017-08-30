import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

class GoogleMaps extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: {},
        zoom: 15
    };

    componentDidMount() {
        const {lat, lng, zoom} = this.props;
        if (window.google && window.google.maps) {
            this.onloadGoogleMaps(lat, lng, zoom);
        } else {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + config.google.apiKey;
            script.onload = () => this.onloadGoogleMaps(lat, lng, zoom);
            document.body.appendChild(script);
        }
    }

    render() {
        const {className, style} = this.props;
        return (
            <div className={`google-maps ${className}`} style={style}>
                <div className="google-maps__inner" ref="maps"/>
            </div>
        );
    }

    onloadGoogleMaps(lat, lng, zoom) {
        new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: new google.maps.Map(this.refs.maps, {
                zoom,
                center: {lat, lng},
                disableDefaultUI: true
            })
        });
    }
}

export default GoogleMaps;
