import React, { useState } from "react";
import logo from "../../asset/images/logo1.png";
import i18n from "../../Lib/i18n";
import { useTranslation } from "react-i18next";
const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    setIsMenuOpen(false); 
    console.log(`Language changed to: ${language}`);
  };
  const { t } = useTranslation();

  return (
    <header className="bg-primary text-xl text-white pl-24 pt-8 pb-8 sm:pl-12 sm:pt-6 sm:pb-6 md:pl-24 md:pt-8 md:pb-8 flex items-center justify-between font-poppins border-b-2 border-border relative">
      <div className="flex items-center">
        <img src={logo} alt="CRAFTERS Logo" className="h-12 sm:h-10" />
      </div>
      
      <nav className="hidden lg:flex">
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#AboutCrafters" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#ContactSection" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">
              Login
            </a>
          </li>
        </ul>
      </nav>

      <div className="hidden lg:flex items-center space-x-8 pr-24">
        <a href="#"><i className="text-2xl fas fa-shopping-cart"></i></a>
        <a href="#"><i className="text-2xl fas fa-heart"></i></a>
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center">
            {selectedLanguage}
            <i className="fas fa-chevron-down ml-2"></i>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-lg">
              <ul className="py-1">
                <li>
                  <button
                    onClick={() => handleLanguageChange('ENG')}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    ENG
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange('FR')}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    FR
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange('KINY')}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    KINY
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex lg:hidden items-center space-x-8">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl sm:pr-6 md:pr-12">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary text-white p-8 sm:p-6 md:p-8 flex flex-col space-y-4 z-50">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/" className="hover:text-gray-300">About Us</a>
            <a href="/" className="hover:text-gray-300">Products</a>
            <a href="/" className="hover:text-gray-300">Contact Us</a>
          </nav>
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center">
              {selectedLanguage}
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-28 bg-white text-black rounded shadow-lg">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={() => handleLanguageChange('ENG')}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      ENG
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange('FR')}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      FR
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLanguageChange('KINY')}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      KINY
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
