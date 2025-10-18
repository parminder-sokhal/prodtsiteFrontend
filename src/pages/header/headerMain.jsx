import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-black top-10 fixed w-full z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3"
          >
            <img
              src="/logo/RobinlogoRemoveBG.png"
              className="h-14"
              alt="Uniform Store Logo"
            />
            <span className="text-xl font-bold text-gray-900">Uniform Store</span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Blogs
            </Link>
            <Link
              to="/media"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            >
              Gallery
            </Link>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/media"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default HeaderMain;
