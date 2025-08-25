import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ServiceBooking.css";

import markerIcon2x from "../assets/marker-icon-2x.png";
import markerIcon from "../assets/marker-icon.png";
import markerShadow from "../assets/marker-shadow.png";

// Google Sheet API URL
const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbzxlAsmWt6E62VjeaMQfUzOrLPV4xmKQoUe9Bb5XRtUxj3v_mGZCQHsD0HNH7LRG2Z_YQ/exec";

// Custom marker icon
const customMarker = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Map zoom controller
function SetMapView({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView([coords.lat, coords.lng], 16, { animate: true });
    }
  }, [coords, map]);
  return null;
}

// Map click selector
function LocationSelector({ onSelect }) {
  const map = useMap();
  useEffect(() => {
    const handleClick = (e) => {
      const { lat, lng } = e.latlng;
      onSelect({ lat, lng });
    };
    map.on("click", handleClick);
    return () => map.off("click", handleClick);
  }, [map, onSelect]);
  return null;
}

function ServiceBooking() {
  const locationState = useLocation();
  const navigate = useNavigate();
  const selectedService = locationState.state?.service || "General Service";

  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    date: today,
    time: "7am-9am",
    location: null,
  });

  const [confirmed, setConfirmed] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [typing, setTyping] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [locating, setLocating] = useState(false);

  // Fetch search suggestions
  useEffect(() => {
    if (!query) {
      setResults([]);
      setTyping(false);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            query
          )}`
        );
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error(err);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Reverse geocode and update address
  const updateAddressFromCoords = async (coords) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      );
      const data = await res.json();
      setFormData((prev) => ({
        ...prev,
        address: data.display_name || "",
        location: coords,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const selectLocation = (coords) => {
    setFormData((prev) => ({ ...prev, location: coords }));
    updateAddressFromCoords(coords);
    setQuery("");
    setResults([]);
  };

  const handleLiveLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        selectLocation(coords);
        setLocating(false);
      },
      (err) => {
        alert("Unable to fetch location: " + err.message);
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 } // faster timeout
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setQuery("");
    setResults([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      name: formData.name,
      whatsapp: formData.whatsapp,
      address: formData.address,
      service: selectedService,
      date: formData.date,
      time: formData.time,
      location: formData.location
        ? `https://maps.google.com/?q=${formData.location.lat},${formData.location.lng}`
        : formData.address,
    };

    try {
      const res = await fetch(SHEET_API_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.result === "success") {
        setConfirmed(true);
      } else {
        alert("Error submitting booking. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting booking. Check console.");
    }
    setSubmitting(false);
  };

  return (
    <div className="booking">
      {!confirmed ? (
        <>
          <h1>Book Your Service</h1>
          <p className="selected-service">Selected Service: {selectedService}</p>

          <form className="booking-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Full address (auto-filled from map)"
              value={formData.address}
              onChange={handleChange}
            />

            <div className="location-picker">
              {/* Search bar above map */}
              <div className="map-search-bar">
                <input
                  type="text"
                  placeholder="Search location..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  type="button"
                  className="btn-search-map"
                  onClick={() => query && setTyping(true)}
                >
                  🔍
                </button>
              </div>

              {typing && results.length > 0 && (
                <ul className="search-results">
                  {results.map((res) => (
                    <li
                      key={res.place_id}
                      onClick={() =>
                        selectLocation({
                          lat: parseFloat(res.lat),
                          lng: parseFloat(res.lon),
                        })
                      }
                    >
                      {res.display_name}
                    </li>
                  ))}
                </ul>
              )}

              <MapContainer
                center={formData.location || { lat: 12.9716, lng: 77.5946 }}
                zoom={13}
                style={{
                  height: "250px",
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "8px",
                }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {formData.location && <SetMapView coords={formData.location} />}
                {formData.location && (
                  <Marker position={formData.location} icon={customMarker} />
                )}
                <LocationSelector onSelect={selectLocation} />
              </MapContainer>

              <button
                type="button"
                className="btn-location"
                onClick={handleLiveLocation}
                disabled={locating}
              >
                {locating ? "📍 Locating..." : "📍 Use My Location"}
              </button>

              {formData.location && (
                <div className="location-preview">
                  <strong>Selected:</strong>{" "}
                  {formData.location.lat.toFixed(5)},{" "}
                  {formData.location.lng.toFixed(5)}
                </div>
              )}
            </div>

            <label>Date of Service</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              min={today}
              onChange={handleChange}
              required
            />

            <label>Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option>7am-9am</option>
              <option>9am-11am</option>
              <option>11am-1pm</option>
              <option>1pm-3pm</option>
              <option>3pm-5pm</option>
              <option>5pm-7pm</option>
            </select>

            <p className="note">⏳ It will take around 3-4 hours for service.</p>

            <button type="submit" className="btn" disabled={submitting}>
              {submitting ? "Submitting..." : "Confirm Booking"}
            </button>
          </form>
        </>
      ) : (
        <div className="confirmation-screen">
          <h2>✅ Booking Confirmed!</h2>
          <p>Our team will reach you shortly.</p>
          <button className="btn" onClick={() => navigate("/services")}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default ServiceBooking;
