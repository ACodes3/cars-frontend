import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import branchesData from '../DummyData/OfficesDummyData';

// Fix leaflet's default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const center = [40.712776, -74.005974]; // Center the map (example: New York City)

const LeafletMap = () => {
  return (
    <MapContainer center={center} zoom={10} style={{ height: "450px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {branchesData.map(branch => (
        <Marker
          key={branch.id}
          position={[parseFloat(branch.latitude), parseFloat(branch.longitude)]}
        >
          <Popup>
            <strong>{branch.name}</strong><br />
            {branch.address}<br />
            {branch.contactNumber}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
