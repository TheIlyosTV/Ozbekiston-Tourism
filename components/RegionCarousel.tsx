"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const regions = [
  { id: 1, name: "Toshkent viloyati", image: "/images/tashkent-region.png" },
  { id: 2, name: "Samarqand viloyati", image: "/images/samarkand-region.png" },
  { id: 3, name: "Buxoro viloyati", image: "/images/bukhara-region.jpg" },
  { id: 4, name: "Xorazm viloyati", image: "/images/khorezm-region.jpg" },
  {
    id: 5,
    name: "Qashqadaryo viloyati",
    image: "/images/kashkadarya-region.jpg",
  },
  {
    id: 6,
    name: "Surxondaryo viloyati",
    image: "/images/surkhandarya-region.png",
  },
  { id: 7, name: "Navoiy viloyati", image: "/images/navoi-region.png" },
  { id: 8, name: "Andijon viloyati", image: "/images/andijan-region.png" },
  { id: 9, name: "Farg'ona viloyati", image: "/images/fergana-region.png" },
  { id: 10, name: "Namangan viloyati", image: "/images/namangan-region.png" },
  { id: 11, name: "Sirdaryo viloyati", image: "/images/syrdarya-region.png" },
  { id: 12, name: "Jizzax viloyati", image: "/images/jizzakh-region.png" },
];

const RegionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % regions.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + regions.length) % regions.length
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-96">
          <Image
            src={regions[currentIndex].image}
            alt={regions[currentIndex].name}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-3xl font-bold">
              {regions[currentIndex].name}
            </h3>
          </div>
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      <div className="mt-14 text-center">
        <Link href={`/regions/${regions[currentIndex].id}`}>
          <button className="bg-[#000000] mr-8 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
            Batafsil ma&apos;lumot
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegionCarousel;
