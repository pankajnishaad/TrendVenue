import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="px-6 sm:px-10 md:px-20 py-6 mt-5 bg-white text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">

        {/* Logo & Description */}
        <div className="lg:col-span-2">
          <img
            className="w-40 mb-4"
            src={assets.logo2}
            alt="TrendVenue Logo"
          />
          <p>
            TrendVenue is a modern lifestyle and fashion destination delivering high-quality products with seamless service. Our mission is to help individuals express themselves through curated collections and a trusted online experience. We bring handpicked styles that reflect confidence and personality, ensuring every interaction feels inspiring and valued.
        
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">COMPANY</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">About us</a></li>
            <li><a href="#" className="hover:text-black">Delivery</a></li>
            <li><a href="#" className="hover:text-black">Cancellation</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">GET IN TOUCH</h3>
          <ul className="space-y-2">
            <li><a href="tel:+91962548xxxx" className="hover:text-black">+91 962548xxxx</a></li>
            <li><a href="mailto:contact@trendvenue.com" className="hover:text-black">contact@trendvenue.com</a></li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-3 text-black">FOLLOW US</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-black"><FaFacebookF /></a>
            <a href="#" className="hover:text-black"><FaTwitter /></a>
            <a href="#" className="hover:text-black"><FaInstagram /></a>
            <a href="#" className="hover:text-black"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <hr className="my-5 border-gray-300" />

      <p className="text-center text-xs text-gray-500">
        © 2025 trendvenue.com — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
