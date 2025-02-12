import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default marker issue with Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const HotelMap = () => {
  const position = [23.7805733, 90.2792392]; // Replace with your hotel's latitude and longitude

  return (
    <div className="my-10">
      <div className="mb-10 text-center">
        <h2 className="text-[#5c4b51] text-5xl font-bold">
          Find Your Perfect Stay
        </h2>
        <p className="text-primary font-medium">
          Use our interactive map to explore hotel locations, discover nearby{" "}
          <br />
          attractions, and choose the ideal room for your next getaway.
        </p>
      </div>
      <div className="relative z-0 h-[400px] w-full">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker className="text-red-500" position={position}>
            <Popup>
              This is the hotel's location. <br /> Come visit us!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default HotelMap;
