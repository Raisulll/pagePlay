import React from "react";
import { Link } from "react-router-dom"; 
import { Facebook, Github, Instagram } from "lucide-react"; 
import logo from "../assets/images/book.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#D4E0B4] border-[#d4e0b4] shadow-[0_0_40px_rgba(0,0,0,0.1)]">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
          {/* Company Section */}
          <div className="md:col-span-3">
            <h3 className="mb-3 text-lg font-bold text-blue-800">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Work With Us Section */}
          <div className="md:col-span-3">
            <h3 className="mb-3 text-lg font-bold text-blue-800">
              WORK WITH US
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/authors"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Authors
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3">
            <h3 className="mb-3 text-lg font-bold text-blue-800">CONTACT</h3>
            <div className="flex">
              <a
                href="#"
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-full transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-full transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-white/50 rounded-full transition-all duration-200"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="md:col-span-3 flex justify-end">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={logo}
                  alt="PagePlay Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">PagePlay</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t  borde-black">
          <p className="text-center text-sm text-black-600">
            Copyright © {new Date().getFullYear()} Company name. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
