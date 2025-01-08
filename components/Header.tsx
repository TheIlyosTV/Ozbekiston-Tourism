"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/regions", label: "Viloyatlar" },
    { href: "/landmarks", label: "Ziyoratgohlar" },
    { href: "/cuisine", label: "Milliy Taomlar" },
    { href: "/tour-packages", label: "Sayohat Paketlari" },
    { href: "/culture", label: "Madaniyat" },
    { href: "/plan-trip", label: "Sayohatni rejalashtirish" },
    { href: "/contact", label: "Bog'lanish" },
    { href: "/amenities", label: "Qulayliklar" },
  ];

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-accent transition duration-300"
        >
          O&apos;zbekiston Sayyohligi
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group hover:text-accent transition duration-300`}
            >
              <span
                className={`block pb-1 ${
                  pathname === item.href ? "text-accent" : ""
                }`}
              >
                {item.label}
              </span>
              <span
                className={`absolute left-0 bottom-[-13px] h-1 bg-white w-0 group-hover:w-full transition-all duration-300`}
              ></span>
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.4 14l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-4 text-sm hover:bg-accent transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
