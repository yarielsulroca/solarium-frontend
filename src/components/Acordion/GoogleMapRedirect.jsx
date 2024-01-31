import React from 'react';
import googleMapsIcon from './google_maps_icon.png'; // Ruta a la imagen del ícono de Google Maps


const GoogleMapRedirect = ({ address }) => {
const handleRedirect = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
};

return (
    <div>
    <span onClick={handleRedirect}>
        <img src={googleMapsIcon} alt="Google Maps" className="google-maps-icon" />
    </span>
    </div>
);
};

export default GoogleMapRedirect;