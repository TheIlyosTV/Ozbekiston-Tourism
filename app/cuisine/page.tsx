import Image from "next/image";

const dishes = [
  {
    id: 1,
    name: "Palov",
    description:
      "O'zbek milliy taomlari ichida eng mashhuri, maxsus retsept bilan tayyorlanadi. Asosiy tarkibiy qismlar: guruch, sabzi, go'sht va ziravorlar.",
    imageUrl: "/images/plov.png",
  },
  {
    id: 2,
    name: "Shashlik",
    description:
      "Kabob turlaridan biri bo'lib, ko'mirda pishiriladi. Go'sht, piyoz va ziravorlar bilan marinad qilinadi.",
    imageUrl: "/images/shashlik.png",
  },
  {
    id: 3,
    name: "Somsa",
    description:
      "Go'sht va sabzavotlar solingan, tandirda yoki pechda pishirilgan mazali pishiriq.",
    imageUrl: "/images/samsa.png",
  },
  {
    id: 4,
    name: "Lag'mon",
    description:
      "Qo'lda cho'zilgan lag'mon makaronlari bilan tayyorlangan mazali sho'rva. Go'sht va sabzavotlardan foydalaniladi.",
    imageUrl: "/images/lagman.png",
  },
  {
    id: 5,
    name: "Manti",
    description:
      "Bug'da pishiriladigan, go'sht yoki sabzavot bilan to'ldirilgan xamir taom.",
    imageUrl: "/images/manti.png",
  },
  {
    id: 6,
    name: "Chuchvara",
    description:
      "Sho'rva ichida qaynatilgan, go'shtli yoki sabzavotli dumaloq xamir mahsuloti.",
    imageUrl: "/images/chuchvara.png",
  },
  {
    id: 7,
    name: "Norin",
    description:
      "Qaynatilgan ot go'shti va qo'l bilan cho'zilgan xamir bilan tayyorlanadi. Sovuq holatda tortiladi.",
    imageUrl: "/images/norin.png",
  },
  {
    id: 8,
    name: "Honim",
    description:
      "Sabzavot va piyoz aralashmasi bilan to'ldirilgan bug'da pishirilgan xamirli taom.",
    imageUrl: "/images/khonim.png",
  },
  {
    id: 9,
    name: "Sho'rva",
    description:
      "Go'shtli va sabzavotli mazali milliy sho'rva. Asosiy tarkibi kartoshka, sabzi va piyozdan iborat.",
    imageUrl: "/images/shorva.png",
  },
  {
    id: 10,
    name: "Halim",
    description:
      "Bug'doy va mol go'shti bilan tayyorlanadigan mazali ovqat. Odatda sovuq kunlarda iste'mol qilinadi.",
    imageUrl: "/images/halim.png",
  },
];

export default function Cuisine() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 mx-4">O&apos;zbek Milliy Taomlari</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
          >
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <Image
              src={dish.imageUrl}
              alt={dish.name}
              fill
              className="object-cover rounded-t-lg"
            />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{dish.name}</h2>
              <p>{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
