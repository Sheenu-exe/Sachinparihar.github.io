'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Logo from "./evirsa-logo-black.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 bg-white left-0 right-0 z-50 sm:h-[10vh] h-[8vh] flex justify-center items-center">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Image className="sm:w-[10vw] w-[25vw]" src={Logo} alt="Evirsa Logo" />
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-gray-800 hover:text-accent transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="text-gray-800 hover:text-accent transition-colors duration-300"
          >
            Know us
          </a>
          <a
            href="/contact"
            className="text-gray-800 hover:text-accent transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
        <button className="md:hidden z-50" onClick={toggleMenu}>
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
      {/* Side Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-6">
          <Image className="w-[25vw] mb-6" src={Logo} alt="Evirsa Logo" />
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-gray-800 hover:text-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/aboutus"
              className="text-gray-800 hover:text-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              Know us
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-accent transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      {/* Overlay */}
      
    </header>
  );
};

export default Header;