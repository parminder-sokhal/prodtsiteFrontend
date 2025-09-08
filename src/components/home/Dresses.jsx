import React from "react";
import { useNavigate } from "react-router-dom";

const Dresses = () => {
  const navigate = useNavigate();

  // Hardcoded dresses data — you can later fetch this from an API
 const dresses = [
  {
    name: "Armed Forces Uniform",
    type: "Durable & Tactical",
    category: "Armed Forces",
    image: "/img/armed-forces.png",
    about: "Designed for durability and operational efficiency, the armed forces uniform ensures mobility, camouflage, and protection for military personnel.",
    slug: "armed-forces-uniform",
  },
  {
    name: "NCC Cadet Uniform",
    type: "Standard & Comfortable",
    category: "NCC",
    image: "/images/ncc.webp",
    about: "Worn by cadets in the National Cadet Corps, this uniform symbolizes discipline and unity, and is ideal for drills and parades.",
    slug: "ncc-cadet-uniform",
  },
  {
    name: "Security Guard Uniform",
    type: "Professional & Practical",
    category: "Security",
    image: "/img/security-uniform.png",
    about: "A professional uniform for private and corporate security staff, designed for long hours and formal presence.",
    slug: "security-guard-uniform",
  },
  {
    name: "Driver Uniform",
    type: "Neat & Presentable",
    category: "Drivers",
    image: "/img/driver-uniform.png",
    about: "Tailored for drivers in public and private sectors, offering comfort and easy maintenance during long working hours.",
    slug: "driver-uniform",
  },
  {
    name: "Hotel Staff Uniform",
    type: "Elegant & Branded",
    category: "Hotel Staff",
    image: "/img/hotel-staff-uniform.png",
    about: "A stylish and coordinated outfit that reflects the hotel brand while providing comfort for front desk, housekeeping, and kitchen staff.",
    slug: "hotel-staff-uniform",
  },
  {
    name: "Hospital Staff Scrubs",
    type: "Hygienic & Flexible",
    category: "Hospital Staff",
    image: "/img/hospital-uniform.png",
    about: "Medical scrubs and lab coats designed for doctors, nurses, and medical assistants. Prioritizes hygiene and ease of movement.",
    slug: "hospital-staff-scrubs",
  },
  {
    name: "Industrial Worker Uniform",
    type: "Protective & Functional",
    category: "Industrial Workers",
    image: "/img/industrial-uniform.png",
    about: "Designed for factory and industrial workers, these uniforms include high-visibility and fire-resistant materials to ensure safety on-site.",
    slug: "industrial-worker-uniform",
  },
];


  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Dresses Collection</h1>

      <div className="flex flex-col gap-12">
        {dresses.map((dress, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start gap-8 bg-white rounded-xl p-6 shadow-md"
          >
            {/* Left: Dress Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={dress.image}
                alt={dress.name}
                className="rounded-xl w-[300px] h-[350px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Right: Dress Info */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{dress.name}</h2>
              <p className="text-lg font-semibold text-gray-700 mb-1">
                Type: {dress.type}
              </p>
              <p className="text-md text-gray-600 mb-4">Category: {dress.category}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{dress.about}</p>

              <button
                onClick={() => navigate(`/dresses/${dress.slug}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md sm:text-lg"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dresses;
