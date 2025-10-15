import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // scroll xuống → ẩn header
      setShow(false);
    } else {
      // scroll lên → hiện header
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`bg-blue-600 text-white p-4 shadow-lg fixed w-full top-0 left-0 transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-blue-600 p-2 rounded-lg">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Smart School Bus</h1>
              <p className="text-blue-100 text-sm">Theo dõi xe buýt trường học</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-semibold">Nguyễn Văn An</p>
              <p className="text-blue-200 text-sm">Phụ huynh</p>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              👤
            </div>
          </div>
        </div>
      </header>
    </>
    // <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
    //   {/* Logo */}
    //   <div className="flex items-center">
    //     <img src="/path/to/your/logo.png" alt="Big Fellow Bus Logo" className="h-10 mr-2" />
    //     <span className="text-xl font-bold">Big Fellow Bus</span>
    //   </div>

    //   {/* Navigation Links */}
    //   <div className="hidden md:flex space-x-8">
    //     <Link to="/" className="hover:text-yellow-400">HOME</Link>
    //     <Link to="/features" className="hover:text-yellow-400">FEATURES</Link>
    //     <Link to="/about" className="hover:text-yellow-400">ABOUT US</Link>
    //     <Link to="/contact" className="hover:text-yellow-400">CONTACT US</Link>
    //     <Link to="/login" className="hover:text-yellow-400">LOGIN</Link>
    //   </div>

    //   {/* Actions */}
    //   <div className="flex items-center space-x-4">
    //     <button className="bg-yellow-500 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400">
    //       GET A QUOTE
    //     </button>
    //     <div className="flex space-x-3">
    //       <a href="#" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"><i className="fab fa-facebook-f"></i></a>
    //       <a href="#" className="p-2 rounded-full bg-blue-400 hover:bg-blue-500"><i className="fab fa-twitter"></i></a>
    //       <a href="#" className="p-2 rounded-full bg-blue-700 hover:bg-blue-800"><i className="fab fa-linkedin-in"></i></a>
    //       <a href="#" className="p-2 rounded-full bg-pink-600 hover:bg-pink-700"><i className="fab fa-instagram"></i></a>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;