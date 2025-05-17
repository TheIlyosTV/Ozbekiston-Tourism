"use client";
import Link from "next/link";
import Image from "next/image";

const regions = [
  {
    id: 1,
    name: "Toshkent viloyati",
    image: "/images/tashkent-region.png",
    description: "Poytaxt va zamonaviy shaharlar",
  },
  {
    id: 2,
    name: "Samarqand viloyati",
    image: "/images/samarkand-region.png",
    description: "Qadimiy me'morchilik va tarix",
  },
  {
    id: 3,
    name: "Buxoro viloyati",
    image: "/images/bukhara-region.jpg",
    description: "Ming gumbazlar shahri",
  },
  {
    id: 4,
    name: "Xorazm viloyati",
    image: "/images/khorezm-region.jpg",
    description: "Qadimiy Xorazm podsholigi",
  },
  {
    id: 5,
    name: "Qashqadaryo viloyati",
    image: "/images/kashkadarya-region.jpg",
    description: "Amir Temur vatani",
  },
  {
    id: 6,
    name: "Surxondaryo viloyati",
    image: "/images/surkhandarya-region.png",
    description: "Qadimiy sivilizatsiyalar maskani",
  },
  {
    id: 7,
    name: "Navoiy viloyati",
    image: "/images/navoi-region.png",
    description: "Qizilqum cho'li va sanoat",
  },
  {
    id: 8,
    name: "Andijon viloyati",
    image: "/images/andijan-region.png",
    description: "Bobur vatani",
  },
  {
    id: 9,
    name: "Farg'ona viloyati",
    image: "/images/fergana-region.png",
    description: "Farg'ona vodiysi gullari",
  },
  {
    id: 10,
    name: "Namangan viloyati",
    image: "/images/namangan-region.png",
    description: "Bog'lar va gullar shahri",
  },
  {
    id: 11,
    name: "Sirdaryo viloyati",
    image: "/images/syrdarya-region.png",
    description: "Sirdaryo bo'yidagi viloyat",
  },
  {
    id: 12,
    name: "Jizzax viloyati",
    image: "/images/jizzakh-region.png",
    description: "Qo'ylarning serjun zoti vatani",
  },
];

const RegionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        O&apos;zbekiston viloyatlari
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regions.map((region) => (
          <Link href={`/regions/${region.id}`} key={region.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <Image
                  src={region.image}
                  alt={region.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-black">
                  {region.name}
                </h2>
                <p className="text-gray-600">{region.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegionsPage;
