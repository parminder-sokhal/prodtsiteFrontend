import React from "react";

const Ncc = () => {
  const dress = {
    name: "NCC Cadet Uniform",
    type: "Standard & Comfortable",
    category: "NCC",
    image: "/images/ncc.webp", // replace with actual NCC image
    about:
      "Worn by cadets in the National Cadet Corps, this uniform symbolizes discipline and unity, and is ideal for drills and parades. Designed with comfort and durability in mind, it is one of the most widely used uniforms across training institutes in India.",
  };

  return (
    <>
      {/* 🔹 Hero Image Section with Overlay Text */}
      <div
        className="flex justify-center w-full h-52 sm:h-96 bg-cover bg-center bg-no-repeat bg-[url('/images/ncc.webp')] rounded-b-lg shadow-md"
      >
        <span className="flex justify-center items-center sm:text-7xl text-4xl font-bold text-white bg-black/40 w-full h-full">
          {dress.name}
        </span>
      </div>

      {/* 🔹 Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Dress Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={dress.image}
              alt={dress.name}
              className="rounded-xl w-[300px] sm:w-[400px] h-[400px] object-cover shadow-lg"
            />
          </div>

          {/* Dress Info */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {dress.name}
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Type:</strong> {dress.type}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Category:</strong> {dress.category}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {dress.about}
            </p>

            {/* Future actions (optional) */}
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                Buy Now
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-md">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ncc;
