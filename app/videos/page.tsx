"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Videos = () => {
  // Sample video data (you can replace this with actual API data)
  const videos = [
    {
      id: 1,
      title: "O'zbekiston bo'ylab sayohat",
      thumbnail: "/images/ozbekiston-boylab-sayohat.png",
      url: "https://youtu.be/vr1Ep1QVfII?si=NTghBfj1IFxhmK6_",
      description:
        "O'zbekistonning go'zal manzaralari va madaniy merosini kashf eting.",
      duration: "03:24",
      views: "21K",
    },
    {
      id: 2,
      title: "Samarqandning tarixiy joylari",
      thumbnail: "/images/samarqand-qadimi-obidalari.png",
      url: "https://youtu.be/z0ThD0B6jXg?si=96Mbcctt1UhTGXvv",
      description:
        "Samarqandning afsonaviy Registon maydoni va boshqa ziyoratgohlarni ko'ring.",
      duration: "02:23",
      views: "20K",
    },
    {
      id: 3,
      title: "O'zbek milliy taomlari",
      thumbnail: "/images/milliy-taomlar.png",
      url: "https://youtu.be/6cX37tza2S0?si=deWUGmRg8o6qOdEE",
      description:
        "O'zbek oshxonasining eng mazali taomlari haqida bilib oling.",
      duration: "02:40",
      views: "39K",
    },
    {
      id: 4,
      title: "Buxoro - Islom madaniyati poytaxti",
      thumbnail: "/images/buxoro-Islom-madaniyati-poytaxti.png",
      url: "https://youtu.be/biRcLlQWp4U?si=BXgv2Plyh79SVsxt",
      description: "Buxoroning 2000 yillik tarixi va arxitektura durdonalari.",
      duration: "11:09",
      views: "394K",
    },
    {
      id: 5,
      title: "Xiva - Qadimiy devorlar shahri",
      thumbnail: "/images/xiva-ichan-qala.png",
      url: "https://youtu.be/KrL6B40wBok?si=RfTHR1LpKFiYHX8o",
      description: "Ichan Qala qal'asi va uning ajoyib me'moriy yodgorliklari.",
      duration: "07:29",
      views: "245K",
    },
    {
      id: 6,
      title: "Toshkent modern shaharchasi",
      thumbnail: "/images/toshkent-modern.png",
      url: "https://youtu.be/N3K5CT357Xo?si=sDPR-nh3JE1BFShr",
      description:
        "O'zbekiston poytaxtining zamonaviy qiyofasi va diqqatga sazovor joylari.",
      duration: "04:57",
      views: "286K",
    },
    {
      id: 7,
      title: "Farg'ona vodiysi tabiati",
      thumbnail: "/images/fargona-tabiati.png",
      url: "https://youtu.be/FSYJRC-5J_k?si=QOxuhMsgEU3STdx3",
      description: "Farg'ona vodiysining noyob tabiati va mahalliy hayot.",
      duration: "02:29",
      views: "8.9K",
    },
    {
      id: 8,
      title: "O'zbek xalq raqslari",
      thumbnail: "/images/uzbek-raqslari.png",
      url: "https://youtu.be/Fk5lxY8at4M?si=wR1QA3d3TNJgfPGs",
      description: "O'zbekistonning an'anaviy raqslari va ularning tarixi.",
      duration: "04:00",
      views: "63K",
    },
    {
      id: 9,
      title: "jannatmakon Jizzax haqida",
      thumbnail: "/images/jizzax-haqida.png",
      url: "https://youtu.be/9I3hbMceEJA?si=aGwdMVT-qXhnHdaT",
      description: "O'zbekistonning yashil viloyatlarining go'zalliklari.",
      duration: "04:13",
      views: "17K",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 py-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            O&apos;zbekiston Videolari
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            O&apos;zbekistonning go&apos;zal manzaralari, madaniyati va tarixini aks
            ettiruvchi 9 ta eng yaxshi videolarni kashf eting.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              <Link href={video.url} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 mb-2 line-clamp-2">
                  <Link
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {video.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span>{video.views} ko&apos;rish</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
            Ko&apos;proq ko&apos;rish
          </button>
        </div>
      </div>
    </div>
  );
};
export default Videos;
