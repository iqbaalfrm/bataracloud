import React from 'react';
import { Cloud, Zap, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Cloud className="h-8 w-8 text-blue-400" />
                <Zap className="h-4 w-4 text-orange-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold">Bataracoud</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              VPS lokal terpercaya untuk developer Indonesia. Server berkualitas, 
              harga terjangkau, dan support responsif untuk semua kebutuhan project Anda.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fitur
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Paket
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: +62858 - 6753 - 4788</li>
              <li>Telegram: @bataracoud</li>
              <li>Email: admin@bataracoud.my.id</li>
              <li>Support: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bataracoud. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 sm:mt-0">
            Bataracoud mendukung penggunaan legal dan bertanggung jawab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;