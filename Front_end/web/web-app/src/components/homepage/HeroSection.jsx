import React from 'react';

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: content */}
          <div>
            <p className="inline-block px-3 py-1 bg-yellow-400 text-purple-900 font-semibold rounded-full text-sm mb-4">
              Trusted by schools & parents
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              style={{ color: '#ffffff', textShadow: '0 6px 30px rgba(0,0,0,0.45)' }}
            >
              Real-time school bus tracking made simple
            </h1>
            <p className="mt-6 text-lg text-gray-100 max-w-xl">
              Busflix provides live location, driver contact, arrival alerts and trip history — giving parents peace of mind and schools full control.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center px-6 py-3 bg-yellow-400 text-purple-900 font-bold rounded-lg shadow hover:brightness-95 transition"
              >
                Try free demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition"
              >
                Learn more
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="bg-white/10 border border-white/5 px-3 py-2 rounded inline-flex items-center text-sm text-gray-100">
                <span className="mr-2">🛰️</span> Live GPS
              </div>
              <div className="bg-white/10 border border-white/5 px-3 py-2 rounded inline-flex items-center text-sm text-gray-100">
                <span className="mr-2">🔔</span> Arrival Alerts
              </div>
              <div className="bg-white/10 border border-white/5 px-3 py-2 rounded inline-flex items-center text-sm text-gray-100">
                <span className="mr-2">👨‍✈️</span> Driver Info
              </div>
            </div>
          </div>

          {/* Right: illustration card */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
              <img src="/assets/LogoBusApp3.png" alt="Illustration" className="w-full h-auto rounded-md" />
              <div className="mt-4 text-sm text-gray-100">
                Live location • ETA • Driver contact
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-200">
                <div>Next stop: <span className="font-semibold text-white">Trường Tiểu học ABC</span></div>
                <div>ETA: <span className="font-semibold text-white">07:35</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;