import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 max-w-7xl mx-auto mt-10">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-yellow-400">
          Real-time school bus tracker for parents
        </h1>
        <button className="mt-8 px-8 py-4 bg-yellow-500 text-purple-900 rounded-lg text-lg font-bold hover:bg-yellow-400 transition duration-300">
          FREE DEMO
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="/assets/LogoBusApp3.png" alt="School Bus Tracker" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default HeroSection;