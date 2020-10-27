import React from 'react';
import './googleMap.scss';
import map from '../../assets/mapSunInstal.svg'

const Map = () => {

  return (
    <div className="mapContainer">
      <div className="mapSection">
        <a href="https://goo.gl/maps/bqz2WKfGW6DXVQqq6"> 
          <img src={map} alt="SunInstallMap"/>
        </a>
      </div>
      <div className="textSection">
        <p>Telefon: 575-009-210</p>
        <a href="mailto:biuro@suninslall.pl">biuro@suninslall.pl</a>
        <p>Adres: ul.Lipowa 26, Leszno 64-100 </p>
      </div>
    </div>
  );
};

export default Map;
