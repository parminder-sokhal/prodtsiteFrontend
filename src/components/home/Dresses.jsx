import React from "react";
import { useNavigate } from "react-router-dom";
import { dressCategories } from "../../data/dressesData";

const Dresses = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Uniform Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional uniforms designed for various industries.
            Quality craftsmanship meets functional design.
          </p>
        </div>

        <div className="space-y-12">
          {dressCategories.map((dress) => (
            <div
              key={dress.id}
              className="flex flex-col lg:flex-row gap-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="lg:w-2/5 overflow-hidden">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-full object-cover min-h-[350px] lg:min-h-[400px] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <div className="inline-block">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
                    {dress.type}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-3">
                  {dress.name}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {dress.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {dress.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-md"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/${dress.slug}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 w-fit shadow-md hover:shadow-lg"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dresses;
