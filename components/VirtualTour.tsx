"use client";

import { useState } from "react";
import Image from "next/image";

const virtualTourSpots = [
  {
    id: 1,
    name: "Registon maydoni, Samarqand",
    image: "/images/registan-square.jpeg",
  },
  { id: 2, name: "Ichan-Qal'a, Xiva", image: "/images/ichan-qala.jpg" },
  { id: 3, name: "Lyabi-Hauz, Buxoro", image: "/images/lyabi-hauz.jpg" },
  {
    id: 4,
    name: "Chorsu bozori, Toshkent",
    image: "/images/chorsu-bazaar.jpg",
  },
];

const VirtualTour = () => {
  const [currentSpot, setCurrentSpot] = useState(virtualTourSpots[0]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={currentSpot.image}
          alt={currentSpot.name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-start p-6">
          <h3 className="text-white text-3xl font-bold text-shadow ">
            {currentSpot.name}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap justify-center gap-4">
          {virtualTourSpots.map((spot) => (
            <button
              key={spot.id}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-black ${
                currentSpot.id === spot.id
                  ? "bg-accent text-white shadow-md transform scale-105"
                  : "bg-gray-200 text-black hover:bg-gray-300 hover:shadow"
              }`}
              onClick={() => setCurrentSpot(spot)}
            >
              {spot.name.split(",")[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
