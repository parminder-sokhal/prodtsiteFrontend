// header.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Headertop = () => {
  return (
    <header className="bg-[#102A83] text-white h-10 py-2 px-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-around space-x-4">
        {/* Left Section: Mobile View */}
        <div className="flex items-center space-x-6 text-sm sm:flex md:flex lg:hidden">
          <Link
            to="tel:+919888505080"
            className="flex items-center space-x-2 hover:text-[#DB8E00]"
          >
            <FaPhoneAlt className="text-xl" />
          </Link>
          <Link
            to="mailto:drrobingmc@yahoo.com"
            className="flex items-center space-x-2 hover:text-[#DB8E00]"
          >
            <FaEnvelope className="text-xl" />
          </Link>

          <Link
            to="https://maps.app.goo.gl/fXcS6u2SSWCmME3e6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#DB8E00]"
          >
            <FaMapMarkerAlt className="text-xl" />
          </Link>
        </div>

        {/* Right Section: Desktop View - Full Contact Info and Social Icons */}
        <div className="container mx-auto items-center justify-around space-x-4 hidden lg:flex">
          <div className="flex items-center space-x-6 text-sm">
            <Link
              to="tel:+919888505080"
              className="flex items-center space-x-2 hover:text-[#DB8E00]"
            >
              <FaPhoneAlt className="text-xl" />
              <span>+91 9888505080</span>
            </Link>
            <Link
              to="mailto:Loonahospital@gmail.com"
              className="flex items-center space-x-2 hover:text-[#DB8E00]"
            >
              <FaEnvelope className="text-xl" />
              <span>drrobingmc@yahoo.com</span>
            </Link>
            <Link
              to="https://maps.app.goo.gl/fXcS6u2SSWCmME3e6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[#DB8E00]"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>Dr Robin's Chest Clinic</span>
            </Link>
            <Link
              to="https://maps.app.goo.gl/ehutqjqNhS6fcEWj7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[#DB8E00]"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>Paras Hospital | Dr. Robin Gupta</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="http://www.youtube.com/@pulmonologychandigarh4634"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-xl hover:text-blue-600" />
            </Link>
            <Link
              to="https://www.facebook.com/p/Dr-Robin-Gupta-Consultant-Pulmonologist-Paras-hospital-Panchkula-100063594323141/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white text-xl hover:text-blue-600" />
            </Link>
            <Link
              to="https://www.instagram.com/thepulmodrs?utm_source=ig_web_button_share_sheet&igsh=ZmE2MmYwY3g5bG1j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-xl hover:text-pink-500" />
            </Link>
          </div>
        </div>

        {/* Book Appointment Button (Visible only on sm and md, hidden on lg and above) */}
        <div className="sm:flex md:flex lg:hidden items-center justify-center space-x-4">
          <Link
            to="/about#qualifications"
            className="bg-white text-black px-1.5 py-1 rounded-sm text-sm hover:bg-[#DB8E00] transition-all whitespace-nowrap"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Headertop;
