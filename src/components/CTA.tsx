import React from 'react';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Zap className="h-16 w-16 text-yellow-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Bangun Proyekmu dengan Server Sakti
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Tanpa ribet, tanpa mahal. Mulai dari Rp 6 ribuan per minggu. 
              Dapatkan server berkualitas dengan support terbaik.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button 
              onClick={() => scrollToSection('packages')}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Coba Sekarang</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Kontak Admin</span>
            </button>
          </div>

          <div className="pt-8 border-t border-blue-500/30">
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">WhatsApp: +62858 - 6753 - 4788</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Telegram: @bataracoud</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Email: admin@bataracoud.my.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;