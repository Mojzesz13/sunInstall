import React from 'react';
import './googleMap.scss';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const GoogleMapTest = () => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 51.83664, lng: 16.57632 }}
      >
        <Marker position={{ lat: 51.83664, lng: 16.57632 }}>
          <InfoWindow>
            <div>
              <p>SunInstall</p>
              <p>ul.Lipowa 26 </p>
              <p>Leszno 64-100</p>
            </div>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    ))
  );

  return (
    <div className="mapContainer">
      <div className="mapSection">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmKNWXe_QlRIAVXzZUIdYC4_17zKwB5ZM&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="textSection">
        <p>Telefon: 575-009-210</p>
        <a href="mailto:biuro@suninslall.pl">biuro@suninslall.pl</a>
        <p>Adres: ul.Lipowa 26, Leszno 64-100 </p>
      </div>
    </div>
  );
};

export default GoogleMapTest;
