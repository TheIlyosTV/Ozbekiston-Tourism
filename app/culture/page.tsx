import Image from "next/image";

const cultureSections = [
  {
    title: "An'analar va urf-odatlar",
    content: `
    Mehmondo'stlik: O'zbeklar mehmonni yuksak hurmat bilan kutib olishadi, unga yaxshi xizmat qilishadi va ko'pincha turli taomlar tayyorlanadi.
    O'zbek oilasida hurmat va o'zaro yordam muhim, katta yoshdagilarga ehtirom ko'rsatiladi.
    To'ylar katta tantana bilan o'tkazilib, ko'plab an'anaviy taomlar, raqslar va musiqalar bilan nishonlanadi.
    Yangi tug'ilgan chaqaloqni yuvish (qirqim marosimi) va o'lim marosimi kabi diniy va oilaviy an'analar mavjud.
  `,
    image: "/images/uzbek-traditions.png",
  },
  {
    title: "Milliy kiyimlar",
    content: `Do'ppi – O'zbeklarning eng mashhur milliy bosh kiyimidir. Bu kiyim asosan erkaklar tomonidan kiyiladi va odatda oq yoki ko'k rangda bo'ladi. 
    Atlas – O'zbek milliy kiyimlarining ajralmas qismlaridan biridir. Bu ipakdan tayyorlangan o'zbek an'anaviy matosidir, uning yorqin ranglari va rang-barang naqshlari bilan ajralib turadi.
    Chapan – O'zbeklarning erkaklar va ayollar kiyadigan an'anaviy kiyimi bo'lib, u atlas yoki boshqa matolardan tayyorlanadi. `,
    image: "/images/uzbek-national-dress.png",
  },
  {
    title: "San'at va hunarmandchilik",
    content: `Kashtachilik – O'zbek kashtachiligi rang-barang iplar bilan turli naqshlar tikish san'ati hisoblanadi.
     Kulolchilik – O'zbek kulolchiligi turli keramik buyumlar yaratish san'ati bo'lib, u juda qadimiy tarixga ega. Kulolchilikda asosan chiroyli idishlar, sopol idishlar, krujkalari va boshqa maishiy buyumlar ishlanadi.
     Yog'och o'ymakorligi – Yog'ochdan turli bezaklar, eshiklar, mebellar va boshqa buyumlar yasash san'ati. O'zbek yog'och o'ymakorligi nafaqat estetik jihatdan, balki amaliyotda ham juda qo'llanilgan.`,
    image: "/images/uzbek-crafts.png",
  },
  {
    title: "Musiqa va raqs",
    content: `Maqom – O'zbek musiqasining eng qadimiy janrlaridan biri. Unga xos bo'lgan qo'shiqlar va musiqa asboblari ijrosida murakkab musiqiy kompozitsiyalar mavjud. O'zbek maqomlari turli his-tuyg'ularni ifodalaydi va UNESCO tomonidan insoniyatning og'zaki va nomoddiy madaniy merosi sifatida tan olingan.
     Dutor – Ikki simli musiqiy asbob, asosan maqom san'ati va xalq qo'shiqlari uchun ishlatiladi.
  Rubob – O'zbek musiqa san'atining qadimiy asboblaridan biri bo'lib, ko'pincha solo ijro etiladi.
`,
    image: "/images/uzbek-music-dance.png",
  },
  {
    title: "Adabiyot va she'riyat",
    content: `Alisher Navoiy 1441-yilda Hirot shahrida tug'ilgan. Uning asli turkman bo'lsa-da, o'zining asarlarini asosan turkiy tilda yozgan. Navoiyning yoshligi Hirotda o'tdi, u ilm olishga juda katta e'tibor qaratdi va zamonining yetakchi ilm-fan olimlaridan saboq oldi.

     Navoiy tomonidan yaratilgan asarlar, ularning badiiy qadriyatlari va falsafiy mazmuni bilan ajralib turadi. U o'zining ijodida insoniyatning axloqiy-ruhiy qadriyatlarini, sevgi, do'stlik, adolat va ezgulikni yuksak baholadi.
     Asarlari: Xamsa, Mahbub ul-qulub, Fuzuli`,
    image: "/images/uzbek-literature.png",
  },
];

export default function CulturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">O&apos;zbek madaniyati</h1>
      {cultureSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:px-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        </div>
      ))}
      <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Madaniy tadbirlar
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Sharq taronalari xalqaro musiqa festivali (Samarqand)</li>
          <li>Ipak va ziravorlar festivali (Buxoro)</li>
          <li>Baxshi san&apos;ati xalqaro festivali (Termiz)</li>
          <li>Xalqaro hunarmandchilik festivali (Qo&apos;qon)</li>
          <li>Boysun bahori etnomadaniy festivali (Surxondaryo)</li>
        </ul>
      </div>
    </div>
  );
}
