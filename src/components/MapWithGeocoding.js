import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript, Polyline } from '@react-google-maps/api';
import { setKey, fromAddress, setLanguage, setRegion } from 'react-geocode';
import { jwtDecode } from 'jwt-decode'; // Fixed import for jwt-decode
import './MapWithGeocoding.css';

// Set the API key for Geocode
setKey('AIzaSyBOzf-XaussCXmQ7jdKxZriWMjLcqPZDbo');
setLanguage('en');
setRegion('ken');

const MapWithGeocoding = () => {
  const [parcelData, setParcelData] = useState([]);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBOzf-XaussCXmQ7jdKxZriWMjLcqPZDbo',
  });

  useEffect(() => {
    fetchParcelData();
  }, []);

  const getUserIdFromToken = (token) => {
    try {
      if (!token || typeof token !== 'string') {
        throw new Error('Invalid token specified: must be a string');
      }

      const decodedToken = jwtDecode(token);

      if (!decodedToken || !decodedToken.sub) {
        throw new Error('Invalid token: sub field missing');
      }

      return decodedToken.sub.userId;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  const API_BASE_URL = 'https://sendit-backend-qhth.onrender.com';
  const fetchParcelData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('JWT token not found in local storage');
      }

      const userId = getUserIdFromToken(token);
      if (!userId) {
        throw new Error('Unable to extract user ID from token');
      }

      const response = await fetch(`${API_BASE_URL}/users/${userId}/parcels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch parcel data');
      }

      const data = await response.json();

      if (!data || !data.parcels || data.parcels.length === 0) {
        setParcelData([]);
        return;
      }

      const parcelsWithCoordinates = await Promise.all(data.parcels.map(async (parcel) => {
        const pickupLatLng = await geocodeAddress(parcel.pickup_location);
        const destLatLng = await geocodeAddress(parcel.destination);
        return {
          id: parcel.id,
          pickupLat: pickupLatLng.lat,
          pickupLng: pickupLatLng.lng,
          destLat: destLatLng.lat,
          destLng: destLatLng.lng,
          pickup_location: parcel.pickup_location,
          destination: parcel.destination,
        };
      }));

      setParcelData(parcelsWithCoordinates);
    } catch (error) {
      console.error('Error fetching parcel data:', error);
    }
  };

  const geocodeAddress = async (address) => {
    try {
      const response = await fromAddress(address);
      if (response.status === 'ZERO_RESULTS') {
        throw new Error(`No results found for address: ${address}`);
      }
      const { lat, lng } = response.results[0].geometry.location;
      return { lat, lng };
    } catch (error) {
      console.error('Error geocoding address:', error);
      return { lat: 0, lng: 0 }; // Default to (0, 0) if geocoding fails
    }
  };

  const handleMarkerClick = (parcel) => {
    setSelectedParcel(parcel);
    calculateRoute(parcel.pickup_location, parcel.destination);
  };

  const calculateRoute = (origin, destination) => {
    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
            setDistance(result.routes[0].legs[0].distance.text);
            setDuration(result.routes[0].legs[0].duration.text);
          } else {
            console.error(`Error fetching directions: ${result}`);
          }
        }
      );
    }
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }

  return (
    <div className="map-container">
      <GoogleMap
        center={{ lat: -1.2847063190982493, lng: 36.82576856761328 }}
        zoom={10} // Adjust the zoom level
        mapContainerStyle={{ height: '100%', width: '100%' }}
      >
        {parcelData.map((parcel) => (
          <React.Fragment key={parcel.id}>
            <Marker
              position={{ lat: parcel.pickupLat, lng: parcel.pickupLng }}
              onClick={() => handleMarkerClick(parcel)}
            />
            <Marker
              position={{ lat: parcel.destLat, lng: parcel.destLng }}
              onClick={() => handleMarkerClick(parcel)}
            />
            <Polyline
              path={[
                { lat: parcel.pickupLat, lng: parcel.pickupLng },
                { lat: parcel.destLat, lng: parcel.destLng }
              ]}
              options={{
                strokeColor: '#2196F3',
                strokeOpacity: 1.0,
                strokeWeight: 2
              }}
            />
          </React.Fragment>
        ))}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              polylineOptions: {
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
              },
            }}
          />
        )}
      </GoogleMap>

      {selectedParcel && (
        <div className="parcel-details">
          <div>
            <strong>Distance:</strong> {distance}
          </div>
          <div>
            <strong>Duration:</strong> {duration}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapWithGeocoding;