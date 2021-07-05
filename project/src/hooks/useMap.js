import {useState, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, cities) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current && map) {
      return;
    }
    const instance = leaflet.map(mapRef.current, {
      center: {
        lat: cities.city.location.latitude,
        lng: cities.city.location.longitude,
      },
      zoom: cities.city.location.zoom,
      zoomControl: false,
      marker: true,
    });

    instance.setView([cities.location.latitude, cities.location.longitude], cities.location.zoom);

    leaflet.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(instance);

    setMap(instance);
  }, [map, mapRef, cities]);

  return map;
}

export default useMap;
