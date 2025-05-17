"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change and lock scroll when open
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/regions", label: "Viloyatlar" },
    { href: "/landmarks", label: "Ziyoratgohlar" },
    {
      href: "#",
      label: "Madaniyat",
      subItems: [
        { href: "/culture", label: "An'analar" },
        { href: "/videos", label: "Videolar" },
        { href: "/cuisine", label: "Milliy Taomlar" },
      ],
    },
    { href: "/plan-trip", label: "Sayohatni rejalashtirish" },
    { href: "/amenities", label: "Tourizm qulayliklar" },
    { href: "/tour-packages", label: "Sayohat Paketlari" },
    { href: "/contact", label: "Bog'lanish" },
  ];

  const toggleDropdown = (itemLabel: string) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
  };

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-2 group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-300">
                  <span className="text-white font-bold text-lg">UZ</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                Uzbekiston
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href + i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 px-3 rounded-md ${
                        pathname.startsWith(item.href)
                          ? "text-blue-700 font-semibold"
                          : ""
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {openDropdown === item.label ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50"
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                                  pathname === subItem.href
                                    ? "bg-blue-50 text-blue-600"
                                    : ""
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 px-3 rounded-md ${
                      pathname === item.href
                        ? "text-blue-700 font-semibold"
                        : ""
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <AnimatePresence>
                      {(hoveredItem === item.href ||
                        pathname === item.href) && (
                        <motion.div
                          layoutId="underline"
                          initial={{ width: 0, left: "50%" }}
                          animate={{ width: "100%", left: 0 }}
                          exit={{ width: 0, left: "50%" }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="absolute bottom-0 left-0 h-0.5 bg-blue-500 rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Yopish menyu" : "Ochish menyu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-start pt-20 overflow-y-auto"
          >
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 text-gray-700 focus:outline-none"
              aria-label="Yopish menyu"
            >
              <X className="h-6 w-6" />
            </motion.button>
            <nav className="flex flex-col items-center w-full px-4">
              {navItems.map((item, i) => (
                <div key={item.href + i} className="w-full">
                  {item.subItems ? (
                    <div className="w-full">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex justify-between items-center w-full py-4 text-lg font-semibold text-gray-800 ${
                          pathname.startsWith(item.href) ? "text-blue-700" : ""
                        }`}
                      >
                        <span>{item.label}</span>
                        {openDropdown === item.label ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="pl-4 w-full"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block py-3 text-base text-gray-700 ${
                                  pathname === subItem.href
                                    ? "text-blue-700 font-semibold"
                                    : ""
                                }`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      custom={i}
                      variants={mobileNavItemVariants}
                      className="w-full text-center"
                    >
                      <Link
                        href={item.href}
                        className={`block py-4 text-lg font-semibold text-gray-800 ${
                          pathname === item.href ? "text-blue-700" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
