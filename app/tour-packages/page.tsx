"use client";
import Link from "next/link";
import Image from "next/image";

const tourPackages = [
  {
    id: 1,
    name: "Ipak yo'li bo'ylab sayohat",
    duration: "10 kun",
    price: 1500,
    description:
      "Samarqand, Buxoro va Xiva shaharlarini o'z ichiga olgan klassik tur",
    image: "/images/silk-road-tour.png",
  },
  {
    id: 2,
    name: "Toshkent va Farg'ona vodiysi",
    duration: "7 kun",
    price: 1200,
    description: "Poytaxt va Farg'ona vodiysining go'zal tabiatini kashf eting",
    image: "/images/tashkent-fergana-tour.png",
  },
  {
    id: 3,
    name: "O'zbek oshxonasi safari",
    duration: "5 kun",
    price: 800,
    description:
      "O'zbek milliy taomlari va ularni tayyorlash sirlarini o'rganing",
    image: "/images/culinary-tour.png",
  },
  {
    id: 4,
    name: "Qadimiy qal'alar sayohati",
    duration: "8 kun",
    price: 1300,
    description:
      "Xorazm va Qoraqalpog'istondagi qadimiy qal'alarni ziyorat qiling",
    image: "/images/ancient-fortresses-tour.png",
  },
];

export default function TourPackagesPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Sayohat paketlari
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {tourPackages.map((pack) => (
          <div
            key={pack.id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-black"
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={pack.image}
                alt={pack.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{pack.name}</h2>
              <p className="text-gray-600 mb-2">{pack.description}</p>
              <p className="text-gray-800 font-semibold mb-2">
                Davomiyligi: {pack.duration}
              </p>
              <p className="text-accent font-bold mb-4">Narxi: ${pack.price}</p>
              <Link
                href="/plan-trip"
                className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition duration-300"
              >
                Buyurtma berish
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
