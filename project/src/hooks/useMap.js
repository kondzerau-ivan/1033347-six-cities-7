import {useState, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.city.location.latitude,
          lng: city.city.location.longitude,
        },
        zoom: city.city.location.zoom,
        zoomControl: false,
        marker: true,
      });

      instance.setView([city.location.latitude, city.location.longitude], city.location.zoom);

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }).addTo(instance);

      setMap(instance);
    }
  }, [map, mapRef, city]);

  return map;
}

export default useMap;
