import React from 'react';
import logo from '../asset/images/logo1.png';

const Footer: React.FC = () => {
    return (
      <footer className="bg-[#03315D] text-xl text-white pt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="footer-description mr-32">
              <div className="text-lg font-bold mb-6">
                <img src={logo} alt="CRAFTERS Logo" className="h-12" />
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have 
                suffered alteration in some form, by injected humour, or randomised words which don't 
                look even slightly.
              </p>
            </div>
            <div className="footer-links max-w-md">
              <p className='mb-10 font-bold'>Links</p>
              <ul className="grid grid-cols-2 gap-2">
                <li><a href="/" className="text-white hover:underline">Home</a></li>
                <li><a href="/" className="text-white hover:underline">Products</a></li>
                <li><a href="/" className="text-white hover:underline">About Us</a></li>
                <li><a href="/" className="text-white hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <p className='mb-10 font-bold'>Contact</p>
              <p>Tel: 07******10</p>
              <p>Email: <a href="mailto:team.crafters@gmail.com" className="text-white hover:underline">team.crafters@gmail.com</a></p>
            </div>
          </div>
        </div>
        <div className="bg-[#013362] text-center py-8">
            <p>&copy; 2024 Upscale Crafters, all rights reserved</p>
          </div>
      </footer>
    );
  };
  
  export default Footer;