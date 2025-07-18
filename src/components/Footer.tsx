import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About InnovationPulse</h4>
            <p className="text-gray-400">
              InnovationPulse provides data-driven insights and analytics to help policymakers foster innovation ecosystems and support entrepreneurial growth.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <a href="#insights" className="hover:text-white">
                  Insights
                </a>
              </li>
              <li>
                <a href="#advocacy" className="hover:text-white">
                  Advocacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              CodeForge
              <br />
              EASA College of Engineering and Technology
              <br />
              Coimbatore 641105
            </p>
            <p className="text-gray-400">
              Email: codeforge2k25@gmail.com
              <br />
              Phone: (997) 088-6300
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Stay up to date with the latest innovation policy insights and analysis.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-innovation-500 hover:bg-innovation-600 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} InnovationPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
