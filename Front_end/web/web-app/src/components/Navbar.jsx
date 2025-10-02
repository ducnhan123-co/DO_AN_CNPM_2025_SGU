import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/path/to/your/logo.png" alt="Big Fellow Bus Logo" className="h-10 mr-2" />
        <span className="text-xl font-bold">Big Fellow Bus</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-yellow-400">HOME</Link>
        <Link to="/features" className="hover:text-yellow-400">FEATURES</Link>
        <Link to="/about" className="hover:text-yellow-400">ABOUT US</Link>
        <Link to="/contact" className="hover:text-yellow-400">CONTACT US</Link>
        <Link to="/login" className="hover:text-yellow-400">LOGIN</Link>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
          GET A QUOTE
        </button>
        <div className="flex space-x-3">
          <a href="#" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="p-2 rounded-full bg-blue-400 hover:bg-blue-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="p-2 rounded-full bg-blue-700 hover:bg-blue-800"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="p-2 rounded-full bg-pink-600 hover:bg-pink-700"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;