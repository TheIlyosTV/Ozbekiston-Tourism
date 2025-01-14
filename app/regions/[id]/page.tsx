
import Image from "next/image";
import Link from "next/link";
import { regions } from '../../data/regions';
import { Metadata } from 'next';

type RegionPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { id } = await params;
  const region = regions.find((r) => r.id === Number(id));
  return {
    title: region ? `${region.name} | Your App Name` : 'Region Not Found',
    description: region ? region.description : 'Region information not available',
  };
}

export async function generateStaticParams() {
  return regions.map((region) => ({
    id: String(region.id),
  }));
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { id } = await params;
  const region = regions.find((r) => r.id === Number(id));

  if (!region) {
    return <div>Viloyat topilmadi</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{region.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={region.image}
              alt={region.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div>
          <p className="text-lg mb-4">{region.description}</p>
          <h2 className="text-2xl font-semibold mb-4">
            Diqqatga sazovor joylar
          </h2>
          <ul className="list-disc list-inside mb-4">
            {region.attractions.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Mehmonxonalar</h2>
          <ul className="list-disc list-inside mb-4">
            {region.hotels.map((hotel, index) => (
              <li key={index}>{hotel}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Restoranlar</h2>
          <ul className="list-disc list-inside mb-4">
            {region.restaurants.map((restaurant, index) => (
              <li key={index}>{restaurant}</li>
            ))}
          </ul>
          <Link
            href={`/plan-trip?region=${region.name}`}
            className="bg-secondary text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 mr-4"
          >
            Sayohat buyurtma qilish
          </Link>
          <Link
            href="/regions"
            className="bg-accent text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Barcha viloyatlar
          </Link>
        </div>
      </div>
    </div>
  );
}

