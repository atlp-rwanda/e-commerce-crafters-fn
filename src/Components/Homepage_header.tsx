import React from 'react';
import logo from '../asset/images/logo1.png';

const Header: React.FC = () => {
  return (
    <header className="bg-[#013362] text-xl text-white mb-8 pl-24 pt-8 pb-8 flex items-center">
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
        <a href="/cart"><i className="text-2xl fas fa-shopping-cart"></i></a>
        <a href="/wishlist"><i className="text-2xl fas fa-heart"></i></a>
      </div>
    </header>
  );
};

export default Header;
