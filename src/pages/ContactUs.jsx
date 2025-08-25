import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ContactUs.css";

// Custom marker icons
import markerIcon2x from "../assets/marker-icon-2x.png";
import markerIcon from "../assets/marker-icon.png";
import markerShadow from "../assets/marker-shadow.png";

const customMarker = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Your business coordinates
const businessLocation = { lat: 12.9561620, lng: 77.4786450 };
const whatsappNumber = "919606188193";
const phoneNumber = "9606188193";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="subtitle">We are here to help. Reach out anytime!</p>

      <div className="contact-buttons">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          📱 WhatsApp Us
        </a>
        <a href={`tel:${phoneNumber}`} className="btn-call">
          📞 Call Now
        </a>
      </div>

      <div className="contact-map">
        <MapContainer
          center={businessLocation}
          zoom={16}
          style={{ height: "400px", width: "100%", borderRadius: "12px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={businessLocation} icon={customMarker}>
            <Popup>We are here!</Popup>
          </Marker>
        </MapContainer>

        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-directions"
        >
          🗺️ Get Directions
        </a>
      </div>

      <div className="contact-footer">
        <h4>Ready to save big?</h4>
        <p>Contact us now to avail these exclusive offers!</p>
      </div>
    </div>
  );
}

export default ContactPage;
