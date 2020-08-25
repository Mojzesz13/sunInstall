import React, { Component } from 'react';
import './googleMap.scss';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

class GoogleMapTest extends Component {
  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 51.83664, lng: 16.57632 }}
        >
          <Marker position={{ lat: 51.83664, lng: 16.57632 }} />
        </GoogleMap>
      ))
    );

    return (
      <div className="mapContainer">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC79HXpe1US1Yy_ROOgLeF2RXILY9AsykE&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default GoogleMapTest;
