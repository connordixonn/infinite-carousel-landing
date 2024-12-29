import React from 'react';
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-theme-navy/80 backdrop-blur-md z-[1000] border-b border-theme-warm/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://res.cloudinary.com/dqojf0xy1/image/upload/v1734675094/SYL_website_ready_suu7uf.png"
                alt="Scale Your Leads Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-theme-warm hover:text-theme-white hover:bg-theme-primary/5" asChild>
              <Link to="/features">Features</Link>
            </Button>
            <Button variant="ghost" className="text-theme-warm hover:text-theme-white hover:bg-theme-primary/5" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button 
              className="relative group overflow-hidden bg-gradient-primary hover:shadow-glow transition-all duration-300" 
              asChild
            >
              <Link to="/get-started">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-theme-primary to-theme-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-theme-warm hover:text-theme-white hover:bg-theme-primary/5">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};