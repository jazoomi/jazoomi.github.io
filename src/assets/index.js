import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    // Define the initMap function to initialize the map
    window.initMap = function() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 43.786728, lng: -79.437044 },
        zoom: 13,
      });

      const position = { lat: 43.786728, lng: -79.437044 };

      // Add a circle around the specified location
      new window.google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: position,
        radius: 1000, // Radius in meters
      });

      // Center the map on the specified location
      map.setCenter(position);
    };

    // Ensure the Google Maps API script is loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      window.initMap();
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default GoogleMap;
