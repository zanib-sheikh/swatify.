import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 z-20 bg-gradient-to-br from-gray-700 to-gray-900 px-4 sm:px-6 md:px-10 py-2 flex items-center justify-between shadow-md font-space-grotesk">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">Sawtify</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white space-x-8">
        <li className="hover:text-gray-300 cursor-pointer">Product</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">How it works</li>
        <li className="hover:text-gray-300 cursor-pointer">Use Cases</li>
      </ul>

      {/* Request a Demo Button - Desktop */}
      <button className="hidden md:block bg-gradient-to-r from-purple-600 to-orange-400 px-4 py-2 rounded-full text-white">
        Request A Demo ➡
      </button>

      {/* Mobile View - Request a Demo and Hamburger */}
      <div className="md:hidden flex items-center">
        {/* Request a Demo Button */}
        <button className="mr-2 bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 text-sm rounded-full text-white relative overflow-hidden group transition duration-300 ease-in-out hover:scale-105 active:scale-95">
  {/* Background Gradient on Hover */}
  <span className="absolute inset-0 bg-gradient-to-l from-pink-700 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-100"></span>
  
  {/* Text */}
  <span className="relative z-10">Request Demo</span>
</button>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMobileMenu}
          className="text-white text-sm rounded focus:outline-none from-purple-400 to-pink-500 bg-gradient-to-tr"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg flex flex-col items-center space-y-4 py-4 mt-2">
          <ul className="flex flex-col items-center space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Product</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">How it works</li>
            <li className="hover:text-gray-300 cursor-pointer">Use Cases</li>
          </ul>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
