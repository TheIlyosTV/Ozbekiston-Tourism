"use client";
import Image from "next/image";

const landmarks = [
  {
    id: 1,
    name: "Registon",
    description: "Samarqanddagi tarixiy maydon",
    imageUrl: "/images/registan.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1420,
    type: "Maydon",
  },
  {
    id: 2,
    name: "Ark Qal'asi",
    description: "Buxorodagi qadimiy qal'a",
    imageUrl: "/images/ark-fortress.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: 500,
    type: "Qal'a",
  },
  {
    id: 3,
    name: "Ichan Qal'a",
    description: "Xivadagi tarixiy shahar",
    imageUrl: "/images/ichan-kala.png",
    location: "Xiva, O'zbekiston",
    yearBuilt: 1600,
    type: "Shahar",
  },
  {
    id: 4,
    name: "Shah-i-Zinda",
    description: "Samarqanddagi arxitektura yodgorligi",
    imageUrl: "/images/shah-i-zinda.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1100,
    type: "Kompleks",
  },
  {
    id: 5,
    name: "Bibi-Xonim Masjidi",
    description: "Samarqanddagi eng katta masjid",
    imageUrl: "/images/bibi-xonim.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1399,
    type: "Masjid",
  },
  {
    id: 6,
    name: "Ulug'bek Rasadxonasi",
    description: "Samarqanddagi ulug' astronomik observatoriya",
    imageUrl: "/images/ulughbek.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1428,
    type: "Rasadxona",
  },
  {
    id: 7,
    name: "Tilla-Kori Madrasasi",
    description: "Samarqanddagi eng mashhur madrasalardan biri",
    imageUrl: "/images/tilla-kori.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1646,
    type: "Madrasah",
  },
  {
    id: 8,
    name: "Khoja Daniyar maqbarasi",
    description: "Xiva shahridagi maqbara",
    imageUrl: "/images/khoja-daniyar.png",
    location: "Xiva, O'zbekiston",
    yearBuilt: "V asr",
    type: "Maqbara",
  },
  {
    id: 9,
    name: "Khiva Minora",
    description: "Xiva shahridagi minora",
    imageUrl: "/images/khiva-minora.png",
    location: "Xiva, O'zbekiston",
    yearBuilt: "XIX asr",
    type: "Minora",
  },
  {
    id: 10,
    name: "Juma Masjidi",
    description: "Buxorodagi eng qadimiy masjid",
    imageUrl: "/images/juma-masjid.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: "IX asr ",
    type: "Masjid",
  },
  {
    id: 11,
    name: "Samarqand Astronomik Observatoriyasi",
    description: "Samarqanddagi astronomik observatoriya",
    imageUrl: "/images/astronomik-observatoriya.png",
    location: "Samarqand, O'zbekiston",
    yearBuilt: 1428,
    type: "Observatoriya",
  },
  {
    id: 12,
    name: "Jahangir Tomb",
    description: "Buxorodagi Jahangir maqbarasi",
    imageUrl: "/images/jahangir-tomb.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: 1600,
    type: "Maqbara",
  },
  {
    id: 13,
    name: "Nurata Qal'asi",
    description: "Nurata shahridagi qadimiy qal'a",
    imageUrl: "/images/nurata-fortress.png",
    location: "Nurata, O'zbekiston",
    yearBuilt: "III asr",
    type: "Qal'a",
  },

  {
    id: 14,
    name: "Madrasa of Muhammad Amin Khan",
    description: "Buxorodagi mashhur madrasah",
    imageUrl: "/images/muhammad-amin-khan.png",
    location: "Buxoro, O'zbekiston",
    yearBuilt: 1555,
    type: "Madrasah",
  },
];

export default function Landmarks() {
  return (
    <div className="bg-white mt-16">
      <h1 className="text-3xl font-bold mb-8 mx-4 text-center text-black">
        Ziyoratgohlar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {landmarks.map((landmark) => (
          <div
            key={landmark.id}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-8 text-black"
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={landmark.imageUrl}
                alt={landmark.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">{landmark.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{landmark.location}</p>
              <p className="text-sm text-gray-600 mb-2">
                Qurilgan yili: {landmark.yearBuilt}
              </p>
              <p>{landmark.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
