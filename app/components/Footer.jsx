import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering individuals and organizations to achieve personal and professional growth through leadership development and skill-building.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-500 transition"
            >
              <FaTwitter className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-pink-500 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Leadership Skills. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          "Empowering leaders, transforming lives."
        </p>
      </div>
    </footer>
  );
};

export default Footer;