"use client"
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Rahmat!</h1>
      <p className="text-xl mb-8">
        Sizning arizangiz muvaffaqiyatli yuborildi. Tez orada siz bilan
        bog&apos;lanamiz.
      </p>
      <Link
        href="/"
        className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default ThankYouPage;
