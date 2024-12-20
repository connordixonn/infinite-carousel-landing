import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <img 
            src="https://res.cloudinary.com/dqojf0xy1/image/upload/v1734674606/Untitled_design_jje1m6.png"
            alt="Scale Your Leads Logo"
            className="h-14 object-contain mix-blend-multiply py-2"
          />
        </div>
      </div>
    </header>
  );
}; 