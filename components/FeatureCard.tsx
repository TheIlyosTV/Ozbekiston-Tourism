"use client"
import Image from "next/image";

type FeatureCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const FeatureCard = ({ imageSrc, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center animate-slideIn">
    <div className="mb-4 relative w-32 h-32 mx-auto">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
