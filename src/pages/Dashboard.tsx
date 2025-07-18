
import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardSection from '@/components/DashboardSection';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Data Sources</h3>
            <p className="text-gray-600 mb-4">
              Our analytics and policy recommendations are based on data from the following trusted sources:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="flex items-start">
                <span className="bg-innovation-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-medium">World Economic Forum</span>
                  <p className="text-xs text-gray-500">Global Competitiveness Report</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-innovation-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-medium">WIPO</span>
                  <p className="text-xs text-gray-500">Global Innovation Index</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-innovation-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-medium">OECD</span>
                  <p className="text-xs text-gray-500">Digital Economy Reports</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-innovation-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-medium">World Bank</span>
                  <p className="text-xs text-gray-500">Innovation & Entrepreneurship Data</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-innovation-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-medium">Deloitte</span>
                  <p className="text-xs text-gray-500">Global R&D Incentives Survey</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-innovation-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-innovation-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-medium">UNCTAD</span>
                  <p className="text-xs text-gray-500">Innovation Policy Reports</p>
                </div>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">Data last updated: April 2025</p>
          </div>
        </div>
        <DashboardSection />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
