import React from 'react';
import { 
  DollarSign, 
  Zap, 
  MapPin, 
  Shield, 
  RefreshCw, 
  Headphones 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Harga Fleksibel',
      description: 'Bisa mingguan, bulanan, atau harian sesuai kebutuhan project Anda',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Uptime 99.8%',
      description: 'Dengan bandwidth lokal 1Gbps untuk performa maksimal',
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      title: 'Server Indonesia',
      description: 'Latency rendah untuk pengguna lokal, akses cepat ke target market',
      color: 'text-red-500'
    },
    {
      icon: Shield,
      title: 'Full Akses Root/RDP',
      description: 'Langsung siap pakai dengan kontrol penuh atas server Anda',
      color: 'text-purple-500'
    },
    {
      icon: RefreshCw,
      title: 'Perpanjang Mudah',
      description: 'Bisa perpanjang tanpa ganti VPS, data tetap aman',
      color: 'text-orange-500'
    },
    {
      icon: Headphones,
      title: 'Support Cepat',
      description: 'Tim support responsif di jam aktif + bisa custom server',
      color: 'text-cyan-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Pilih Bataracoud?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami memahami kebutuhan developer Indonesia. Solusi VPS yang tepat untuk project bot, 
            aplikasi web, hingga server game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors ${feature.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium">99.8% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium">1Gbps Bandwidth</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="font-medium">24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;