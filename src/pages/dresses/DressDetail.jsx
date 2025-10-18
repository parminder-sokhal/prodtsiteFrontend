import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dressCategories } from '../../data/dressesData';
import FormModal from '../form/FormModal';

const DressDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dress = dressCategories.find((d) => d.slug === slug);

  if (!dress) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Uniform Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-8 transition-colors"
          >
            ← Back to Home
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full w-fit mb-4">
                  {dress.type}
                </span>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {dress.name}
                </h1>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {dress.detailedDescription}
                </p>

                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex-1"
                  >
                    Buy Now / Inquiry
                  </button>
                  <button
                    onClick={() => navigate('/media')}
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex-1"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-blue-600">✓</span> Key Features
                  </h2>
                  <ul className="space-y-4">
                    {dress.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-blue-600">📦</span> Available Options
                  </h2>
                  <ul className="space-y-4">
                    {dress.available.map((option, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span className="text-lg">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {dress.gallery && dress.gallery.length > 0 && (
              <div className="p-8 lg:p-12 bg-white">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Product Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {dress.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={image}
                        alt={`${dress.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us for bulk orders, custom designs, or any inquiries
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <FormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          uniformType={dress.name}
        />
      )}
    </>
  );
};

export default DressDetail;
