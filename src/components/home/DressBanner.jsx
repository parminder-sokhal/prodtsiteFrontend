import React from 'react';
import { useNavigate } from 'react-router-dom';
import { dressCategories } from '../../data/dressesData';

const DressBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Uniform Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional uniforms for every industry. Quality, comfort, and style combined.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {dressCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/${category.slug}`)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-sm md:text-base text-gray-800 group-hover:text-blue-600 transition-colors">
                    {category.category}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DressBanner;
