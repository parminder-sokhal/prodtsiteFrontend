import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeaderMain() {
  return (
    <nav className="bg-white border-black top-10 fixed w-full z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/RobinlogoRemoveBG.png"
              className="h-16"
              alt="Logo"
            />
          </Link>

          <div className="hidden lg:block text-xl">
            <Link
              to="/pictures"
              className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderMain;
