import React, { useState } from 'react';
import logo from '../asset/images/logo1.png';

const Header: React.FC = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    console.log(`Language changed to: ${language}`);
  };

  return (
    <header className="bg-[#013362] text-xl text-white pl-24 pt-8 pb-8 flex items-center">
      <div className="text-lg font-bold mr-64">
      <img src={logo} alt="CRAFTERS Logo" className="h-12" />
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/" className="hover:text-gray-300">About Us</a></li>
          <li><a href="/" className="hover:text-gray-300">Products</a></li>
          <li><a href="/" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </nav>
      <div className="flex ml-80 space-x-8">
        <a href="#"><i className="text-2xl fas fa-shopping-cart"></i></a>
        <a href="#"><i className="text-2xl fas fa-heart"></i></a>
      </div>
      <div className="relative ml-10">
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
    </header>
  );
};

export default Header;
