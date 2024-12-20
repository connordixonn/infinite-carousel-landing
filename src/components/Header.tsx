import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <img 
            src="https://res.cloudinary.com/dqojf0xy1/image/upload/v1734675094/SYL_website_ready_suu7uf.png"
            alt="Scale Your Leads Logo"
            className="h-16 object-contain"
          />
        </div>
      </div>
    </header>
  );
}; 