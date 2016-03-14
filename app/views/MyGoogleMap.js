import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import {fitBounds} from 'google-map-react/utils';

const googleMapStyle = {
  position: 'relative',

  width: 'auto',
  height: 'auto',

  'minWidth': '1024px',
  'minHeight': '1080px',
};


// Google Map Options
function getMapOptions(maps) {
    return {
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_CENTER
        },
        zoom: 2,
        minZoom: 2,
        maxZoom: 5
    };
}

export default class MyGoogleMap extends Component {
  static defaultProps = {
      defaultCenter: [33.72433966, 19.16015625],
      defaultZoom: 2
  };

  constructor(props) {
    super(props);
    this.state = {
      center: [33.72433966, 19.16015625],
    };

    this.adjustGoogleMapToFitBounds = this.adjustGoogleMapToFitBounds.bind(this);
  }

  componentDidMount() {
  }

  adjustGoogleMapToFitBounds({center, zoom, bounds, other}){
      console.log('==============adjustGoogleMapToFitBounds==================');
      console.log('center', center);
      console.log('zoom', zoom);
      console.log('bounds', bounds);

      const newBounds = {
        nw: {
          lat: 79.81230227,
          lng: -175.25390625
        },
        se: {
          lat: -40.17887331,
          lng: 168.57421875,
        }
      };

      const size = {
        width: 1024*2, // Map width in pixels
        height: 1024*2, // Map height in pixels
      };

      const {newCenter, newZoom} = fitBounds(newBounds, size);

      console.log('newCenter', newCenter);
      console.log('newZoom', newZoom);

      // Force to set to 2, comment out
      // this.setState({
      //   zoom: 2
      // })

  }

  render() {
    return (
       <GoogleMap
          style={googleMapStyle}
          center={this.state.center}
          options={getMapOptions}
          defaultCenter={this.props.defaultCenter}
          defaultZoom={this.props.defaultZoom}
          bootstrapURLKeys={{
              key: 'AIzaSyB0NTYM1m6U5eVydRf72w7vBp6dylwpu88'
          }}
          onChange={this.adjustGoogleMapToFitBounds}
        >
      </GoogleMap>
    );
  }
}