
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page and then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const scrollToFooter = () => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page and then scroll to footer
      window.location.href = '/#footer';
      return;
    }
    
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { title: "Dashboard", href: "/dashboard", isExternal: true },
    { title: "Insights", href: "#insights", onClick: () => scrollToSection('insights') },
    { title: "Advocacy", href: "#advocacy", onClick: () => scrollToSection('advocacy') },
    { title: "About", href: "#footer", onClick: scrollToFooter },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-innovation-500 to-insight-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">IP</span>
            </div>
            <span className="font-bold text-xl md:text-2xl">InnovationPulse</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.title}
                  to={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-innovation-600 font-medium transition-colors"
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    item.onClick && item.onClick();
                  }}
                  className="px-4 py-2 text-gray-700 hover:text-innovation-600 font-medium transition-colors"
                >
                  {item.title}
                </a>
              )
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      item.onClick && item.onClick();
                    }}
                    className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                  >
                    {item.title}
                  </a>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
