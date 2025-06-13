import React, { useState } from 'react';
import { Menu, X, Cloud, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Cloud className="h-8 w-8 text-blue-500" />
              <Zap className="h-4 w-4 text-orange-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-gray-900">Bataracoud</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Fitur
            </button>
            <button 
              onClick={() => scrollToSection('packages')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Paket
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Hubungi Kami
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Cek Ketersediaan
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Mulai Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Fitur
              </button>
              <button 
                onClick={() => scrollToSection('packages')} 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Paket
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Hubungi Kami
              </button>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="block w-full text-left text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Cek Ketersediaan
                </button>
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  Mulai Sekarang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;