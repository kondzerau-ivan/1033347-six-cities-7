import React, {useRef, useEffect} from 'react';
import { VALIDATION_RULES } from '../../validation/validation.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

function Map({housingInfo}) {
  const DEFAULT_CITY = 0;

  const city = housingInfo[DEFAULT_CITY];

  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if(map) {
      housingInfo.forEach((elem) => {
        leaflet
          .marker({
            lat: elem.city.location.latitude,
            lng: elem.city.location.longitude,
          }, {
            icon: icon,
          })
          .addTo(map);
      });
    }
  }, [map, housingInfo, icon]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapRef} >
    </div>
  );
}

Map.propTypes = VALIDATION_RULES;

export default Map;
