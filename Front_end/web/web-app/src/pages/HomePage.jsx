import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <NavBar />
      <HeroSection />
      {/* Thêm các phần khác của trang chủ nếu có, ví dụ: Features, Testimonials */}
    </div>
  );
}

export default HomePage;