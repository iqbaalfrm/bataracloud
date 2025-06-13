import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Bisa pakai buat bot, panel, VPN?',
      answer: 'Ya, bisa! Selama penggunaan legal dan wajar, Anda bebas install aplikasi apapun. Cocok untuk bot Telegram/Discord, web panel, VPN pribadi, aplikasi web, dan lainnya.'
    },
    {
      question: 'Apakah support dedicated IP?',
      answer: 'Ya, kami menyediakan dedicated IP dengan tambahan biaya Rp 50.000 per IP per bulan. IP dedicated memberikan kontrol lebih baik untuk aplikasi yang membutuhkan IP tetap.'
    },
    {
      question: 'Apakah bisa custom spesifikasi server?',
      answer: 'Tentu! Hubungi admin kami untuk request custom plan sesuai kebutuhan. Kami bisa menyesuaikan CPU, RAM, storage, dan bandwidth sesuai requirement project Anda.'
    },
    {
      question: 'Bagaimana sistem pembayaran?',
      answer: 'Kami terima pembayaran via transfer bank, e-wallet (OVO, DANA, GoPay), dan QRIS. Pembayaran bisa harian, mingguan, atau bulanan sesuai kebutuhan.'
    },
    {
      question: 'Apakah data aman jika server mati?',
      answer: 'Server dilengkapi backup harian otomatis. Jika terjadi masalah hardware, data dapat di-restore dari backup terbaru. Kami juga sarankan backup mandiri untuk data kritikal.'
    },
    {
      question: 'Berapa lama setup server?',
      answer: 'Setup server biasanya 5-15 menit setelah pembayaran dikonfirmasi. Untuk custom server mungkin butuh waktu lebih lama, maksimal 2 jam di jam kerja.'
    },
    {
      question: 'Apakah ada trial atau money back guarantee?',
      answer: 'Kami menyediakan paket harian dengan harga Rp 2.000-5.000 yang bisa dijadikan trial. Jika tidak puas dalam 24 jam pertama, bisa refund sesuai T&C.'
    },
    {
      question: 'Limitasi bandwidth dan traffic?',
      answer: 'Bandwidth 1Gbps shared, traffic unlimited untuk penggunaan wajar. Jika usage sangat tinggi dan mengganggu user lain, kami akan koordinasi untuk upgrade atau optimasi.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600">
            Jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Hubungi Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;