import React from 'react';
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-[1000] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://res.cloudinary.com/dqojf0xy1/image/upload/v1734675094/SYL_website_ready_suu7uf.png"
                alt="Scale Your Leads Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium" asChild>
              <Link to="/case-studies">Case Studies</Link>
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button className="primary-button" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};