
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center text-center lg:text-left pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-innovation-50 to-insight-50 -z-10"></div>
      <div className="container mx-auto px-4 py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Innovation Pulse <br />
              <span className="text-innovation-600">Policy Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Data-driven insights for policymakers to foster innovation ecosystems and support entrepreneurial growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard">
                <Button className="text-white bg-innovation-600 hover:bg-innovation-700 px-8 py-6 text-lg rounded-lg">
                  Explore Dashboard
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-innovation-600 text-innovation-600 hover:bg-innovation-50 px-8 py-6 text-lg"
                onClick={() => scrollToSection('insights')}
              >
                View Insights
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-innovation-500 to-insight-500 rounded-2xl blur-xl opacity-30 transform rotate-6"></div>
              <div className="relative bg-white p-5 sm:p-10 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">Innovation Index</h3>
                  <div className="text-2xl font-bold text-innovation-600">78.3</div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Policy Environment</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="bg-innovation-400 h-full rounded-full" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>R&D Investment</span>
                      <span>86%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="bg-innovation-500 h-full rounded-full" style={{ width: "86%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Talent Pipeline</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="bg-innovation-300 h-full rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Infrastructure</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className="bg-innovation-600 h-full rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500">Last updated: March 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
