// Create the map
const map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 10,
}).addTo(map);

// Fetch Earthquake Data
fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
  .then(res => res.json())
  .then(data => {
    data.features.forEach(eq => {
      const [lon, lat, depth] = eq.geometry.coordinates;
      const mag = eq.properties.mag;
      const place = eq.properties.place;
      const time = new Date(eq.properties.time).toLocaleString();

      // Add pulsing ring effect
      L.marker([lat, lon], {
        icon: L.divIcon({
          className: 'pulse-wrapper',
          html: `<div class="pulse-ring"></div>`,
          iconSize: [20, 10],
          iconAnchor: [10, -8]
        }),
        interactive: false
      }).addTo(map);

      // Add circle marker
      L.circleMarker([lat, lon], {
        radius: mag * 2,
        color: mag > 5 ? 'red' : mag > 3 ? 'orange' : 'green',
        fillOpacity: 0.8
      }).addTo(map)
        .bindPopup(`<strong>${place}</strong><br>
                    Magnitude: ${mag}<br>
                    Depth: ${depth} km<br>
                    Time: ${time}`);

      // Add magnitude label
      L.marker([lat, lon], {
        icon: L.divIcon({
          className: 'mag-label',
          html: `<span>${mag.toFixed(1)}</span>`,
          iconSize: [30, 10],
          iconAnchor: [15, -10]
        })
      }).addTo(map);
    });
  });

