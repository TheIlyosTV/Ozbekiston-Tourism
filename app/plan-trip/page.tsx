"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";

const PlanTripPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    startDate: string;
    endDate: string;
    regions: string[];
    additionalInfo: string;
  }>({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    regions: [],
    additionalInfo: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      regions: checked
        ? [...prev.regions, value]
        : prev.regions.filter((region) => region !== value),
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Forma yuborildi:", formData);
    router.push("/thank-you");
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Sayohatni rejalashtirish
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Telefon raqami
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startDate"
          >
            Sayohat boshlanish sanasi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="endDate"
          >
            Sayohat tugash sanasi
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tashrif buyurmoqchi bo&apos;lgan viloyatlar
          </label>
          <div className="grid grid-cols-2 gap-2 text-black">
            {[
              "Toshkent",
              "Samarqand",
              "Buxoro",
              "Xorazm",
              "Qashqadaryo",
              "Surxondaryo",
              "Navoiy",
              "Andijon",
              "Farg'ona",
              "Namangan",
              "Sirdaryo",
              "Jizzax",
            ].map((region) => (
              <label key={region} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="regions"
                  value={region}
                  checked={formData.regions.includes(region)}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">{region}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="additionalInfo"
          >
            Qo&apos;shimcha ma&apos;lumotlar
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-black rounded-full hover:bg-opacity-90 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline "
            type="submit"
          >
            Sayohat uchun ariza yuborish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanTripPage;
