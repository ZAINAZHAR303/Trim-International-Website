"use client";

import Link from "next/link";
import ToggleBtn from "../ToggleBtn";
import useMenuStore from "../../store/menuStore";

const Navbar = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Company Logo" className="h-10 w-auto" />
          {/* <span className="text-xl font-semibold text-gray-800">TIGL SOAR</span> */}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center space-x-6">
          <Link href="/" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 ">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 ">
            About
          </Link>
          <Link href="/tigl" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 ">
          <strong>
            TIGL
            </strong>
          </Link>
          <Link href="/tigl" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 ">
            SOAR
          </Link>
          <Link href="/products" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 ">
            Products
          </Link>
          <Link href="/services" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 ">
            Services
          </Link>
          <Link href="/contact" className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <ToggleBtn />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white text-gray-800 absolute top-16 left-0 w-full shadow-md transition-transform duration-300  ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {["Home", "About", "TIGL", "SOAR", "Products", "Services", "Contact"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className="block w-full text-center py-3 hover:bg-blue-100 transition"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
