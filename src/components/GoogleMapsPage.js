import './GoogleMapsPage.css';
import { Link } from 'react-router-dom';
import MapWithGeocoding from './MapWithGeocoding'; // Import your Google Maps component

const GoogleMapsPage = () => {
  return (
    <div className="maps-page">
      <h1>Google Maps Page</h1>
      <p>To see estimated travel distance and duration, click on the marker.</p>
      <MapWithGeocoding /> {/* Render your Google Maps component here */}
    </div>
  );
};

export default GoogleMapsPage;
