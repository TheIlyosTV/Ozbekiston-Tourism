"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+998", // Boshlang'ich telefon kodini O'zbekiston deb olish
    countryFlag: "🇺🇿", // Boshlang'ich bayroq O'zbekiston
  });

  const countries = [
    { name: "O'zbekiston", code: "+998", flag: "🇺🇿" },
    { name: "Rossiya", code: "+7", flag: "🇷🇺" },
    { name: "AQSh", code: "+1", flag: "🇺🇸" },
    { name: "Xitoy", code: "+86", flag: "🇨🇳" },
    { name: "Birlashgan Qirollik", code: "+44", flag: "🇬🇧" },
    // Qo'shimcha davlatlar va kodlar kiritishingiz mumkin
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryCode = e.target.value;
    const selectedCountry = countries.find(
      (country) => country.code === selectedCountryCode
    );
    setFormData((prev) => ({
      ...prev,
      countryCode: selectedCountryCode,
      countryFlag: selectedCountry?.flag || "🇺🇿", // Bayroqni yangilash
      phone: "", // Telefon raqamini tozalash
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Xabar yuborildi:", formData);
    alert("Xabaringiz muvaffaqiyatli yuborildi!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      countryCode: "+998",
      countryFlag: "🇺🇿",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Biz bilan bog&apos;laning
      </h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Ism-familiya
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Xabar
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-accent hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Xabar yuborish
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Biz bilan bog&apos;lanish uchun:
        </h2>
        <ul className="list-disc list-inside">
          <li>Telefon: +998 71 123 45 67</li>
          <li>Email: info@uzbekistantourism.uz</li>
          <li>Manzil: Toshkent shahri, Amir Temur ko&apos;chasi, 1-uy</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
