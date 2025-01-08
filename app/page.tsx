import Link from "next/link";
import Image from "next/image";
import RegionCarousel from "../components/RegionCarousel";
import InteractiveMap from "../components/InteractiveMap";
import VirtualTour from "../components/VirtualTour";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/images/uzbekistan-hero.png"
          alt="O'zbekiston manzarasi"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            O&apos;zbekiston Sayyohlik Salohiyati
          </h1>
          <p className="text-xl mb-8">
            12 ta viloyat, minglab tarixiy obidalar, betakror tabiat
          </p>
          <Link href="/regions">
            <button className="bg-[#000000] mr-8 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              Viloyatlarni kashf eting
            </button>
          </Link>
          <Link href="/plan-trip">
            <button className="bg-[#000000] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              Sayohatni rejalashtirish
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            O&apos;zbekiston viloyatlari
          </h2>
          <RegionCarousel />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Interaktiv xarita
          </h2>
          <InteractiveMap />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Virtual sayohat
          </h2>
          <VirtualTour />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nima uchun O&apos;zbekiston?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              imageSrc="/images/history.jpg"
              title="Boy tarix"
              description="2750 yildan ortiq tarixga ega shaharlar va 8000 dan ortiq tarixiy yodgorliklar"
            />
            <FeatureCard
              imageSrc="/images/food.jpg"
              title="Mazali taomlar"
              description="UNESCO nomoddiy madaniy meros ro'yxatiga kiritilgan o'zbek palovi va boshqa milliy taomlar"
            />
            <FeatureCard
              imageSrc="/images/nature.jpg"
              title="Go'zal tabiat"
              description="Tyan-Shan tog'laridan Orol dengizigacha, Qizilqum cho'lidan Farg'ona vodiysigacha xilma-xil landshaftlar"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
