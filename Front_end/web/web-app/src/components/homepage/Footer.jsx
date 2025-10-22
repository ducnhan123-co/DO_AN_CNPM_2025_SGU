import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-40 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="text-xl font-semibold">Busflix</div>
          <div className="text-sm">Real-time school bus tracking</div>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} Busflix. All rights reserved.</div>
      </div>
    </footer>
  );
}
