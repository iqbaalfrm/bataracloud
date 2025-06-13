import React from 'react';
import { Check, Star } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: 'Basic',
      description: 'Cocok untuk bot kecil, testing, atau belajar',
      cpu: '2 CPU',
      ram: '4 GB RAM',
      disk: '30 GB Disk',
      weeklyPrice: '13.000',
      monthlyPrice: '40.000',
      savings: '18%',
      popular: false
    },
    {
      name: 'Standard',
      description: 'Ideal untuk aplikasi web, bot production',
      cpu: '4 CPU',
      ram: '8 GB RAM',
      disk: '30 GB Disk',
      weeklyPrice: '25.000',
      monthlyPrice: '75.000',
      savings: '25%',
      popular: true
    },
    {
      name: 'Pro',
      description: 'Untuk aplikasi kompleks, multiple services',
      cpu: '4 CPU',
      ram: '16 GB RAM',
      disk: '60 GB Disk',
      weeklyPrice: '32.000',
      monthlyPrice: '95.000',
      savings: '26%',
      popular: false
    }
  ];

  const features = [
    'Full akses root/RDP',
    'Bandwidth 1Gbps',
    'Uptime 99.8%',
    'Support 24/7',
    'Perpanjang fleksibel',
    'Server Indonesia'
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pilih Paket Sesuai Kebutuhanmu
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Semua paket termasuk akses penuh dan support Indonesia
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="h-4 w-4" />
            <span>Hemat hingga 26% jika ambil bulanan</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                pkg.popular 
                  ? 'border-blue-500 ring-4 ring-blue-100' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Terpopuler
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                {/* Specs */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">CPU</span>
                    <span className="font-medium">{pkg.cpu}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">RAM</span>
                    <span className="font-medium">{pkg.ram}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Storage</span>
                    <span className="font-medium">{pkg.disk}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-3xl font-bold text-gray-900">Rp {pkg.weeklyPrice}</span>
                      <span className="text-gray-600">/ minggu</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      atau Rp {pkg.monthlyPrice} / bulan
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      <span>Hemat {pkg.savings} bulanan</span>
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-blue-600 text-gray-900 hover:text-white'
                }`}>
                  Pilih {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Butuh spesifikasi khusus atau ada pertanyaan?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Hubungi Tim Sales →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;