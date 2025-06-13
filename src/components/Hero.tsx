import React from 'react';
import { ArrowRight, CheckCircle, Cloud, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                VPS Lokal,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Sakti
                </span>
                , dan{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  Fleksibel
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mulai dari <span className="font-semibold text-blue-600">Rp 6 ribuan per minggu</span>. 
                Full akses root. Tanpa ribet. Dukungan cepat & harga transparan.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Server Indonesia, latency rendah</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Uptime hingga 99.8% dengan bandwidth 1Gbps</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Pembayaran fleksibel: harian, mingguan, bulanan</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('packages')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Coba Sekarang</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Cek Paket
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Background circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
              
              {/* Main cloud */}
              <div className="relative z-10 transform hover:scale-110 transition-transform duration-300">
                <Cloud className="h-32 w-32 text-blue-500 drop-shadow-2xl" />
                
                {/* Lightning bolts */}
                <Zap className="h-12 w-12 text-orange-500 absolute -top-2 -right-2 animate-pulse" />
                <Zap className="h-8 w-8 text-yellow-500 absolute -bottom-2 -left-2 animate-pulse delay-300" />
                <Zap className="h-6 w-6 text-purple-500 absolute top-4 -left-4 animate-pulse delay-700" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-12 left-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-16 left-16 w-4 h-4 bg-orange-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;