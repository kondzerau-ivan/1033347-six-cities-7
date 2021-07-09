import React, {useRef, useEffect} from 'react';
import { VALIDATION_RULES } from '../../validation/validation.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

function Map({ cities }) {
  const [defaultCity] = cities;

  const mapRef = useRef(null);

  const map = useMap(mapRef, defaultCity);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if(!map) {
      return;
    }
    cities.forEach((city) => {
      leaflet
        .marker({
          lat: city.city.location.latitude,
          lng: city.city.location.longitude,
        }, {
          icon: icon,
        })
        .addTo(map);
    });
  }, [map, cities, icon]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapRef} >
    </div>
  );
}

Map.propTypes = VALIDATION_RULES;

export default Map;
