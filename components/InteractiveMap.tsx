"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet default marker icon fix
delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })
  ._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

// O'zbekiston viloyatlari ma'lumotlari
const regions = [
  {
    id: 1,
    name: "Toshkent",
    lat: 41.2995,
    lng: 69.2401,
    info: "O'zbekiston poytaxti",
    x: 50,
    y: 50,
  },
  {
    id: 2,
    name: "Samarqand",
    lat: 39.6547,
    lng: 66.9597,
    info: "Tarixiy shahar, Registon maydoni",
    x: 40,
    y: 40,
  },
  {
    id: 3,
    name: "Buxoro",
    lat: 39.768,
    lng: 64.421,
    info: "Qadimiy shahar, ko'plab masjidlar",
    x: 30,
    y: 30,
  },
  {
    id: 4,
    name: "Xiva",
    lat: 41.3775,
    lng: 60.3619,
    info: "Ichan-Qal'a, ochiq osmon ostidagi muzey",
    x: 20,
    y: 20,
  },
  {
    id: 5,
    name: "Farg'ona",
    lat: 40.3864,
    lng: 71.787,
    info: "Farg'ona vodiysi markazi",
    x: 60,
    y: 60,
  },
  {
    id: 6,
    name: "Andijon",
    lat: 40.7821,
    lng: 72.3442,
    info: "Bobur vatani",
    x: 70,
    y: 70,
  },
  {
    id: 7,
    name: "Namangan",
    lat: 41.0011,
    lng: 71.6683,
    info: "Bog'lar shahri",
    x: 65,
    y: 65,
  },
  {
    id: 8,
    name: "Nukus",
    lat: 42.4672,
    lng: 59.6108,
    info: "Qoraqalpog'iston poytaxti, San'at muzeyi",
    x: 10,
    y: 10,
  },
  {
    id: 9,
    name: "Termiz",
    lat: 37.2242,
    lng: 67.2783,
    info: "Surxondaryo viloyati markazi",
    x: 45,
    y: 15,
  },
  {
    id: 10,
    name: "Qarshi",
    lat: 38.8639,
    lng: 65.79,
    info: "Qashqadaryo viloyati markazi",
    x: 35,
    y: 25,
  },
  {
    id: 11,
    name: "Urganch",
    lat: 41.5506,
    lng: 60.6314,
    info: "Xorazm viloyati markazi",
    x: 15,
    y: 25,
  },
  {
    id: 12,
    name: "Navoiy",
    lat: 40.0984,
    lng: 65.3791,
    info: "Navoiy viloyati markazi",
    x: 38,
    y: 38,
  },
];




const InteractiveMap: React.FC = () => {
  const [selectedRegion] = useState<number | null>(null);
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[41.3775, 64.5853]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        className="z-10"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {regions.map((region) => (
          <Marker key={region.name} position={[region.lat, region.lng]}>
            <Popup>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">{region.name}</h3>
                <p>{region.info}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md transition-opacity duration-300 opacity-90 hover:opacity-100">
        {selectedRegion &&
          regions.find((region) => region.id === selectedRegion)?.name}
      </div>
    </div>
  );
};

export default InteractiveMap;
