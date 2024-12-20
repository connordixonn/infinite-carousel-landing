import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-6">
            <img 
              src="https://res.cloudinary.com/dqojf0xy1/image/upload/v1734673877/ab0d48b8-4f7b-4b0b-9763-f8b2528c6efa_cqcauo.png"
              alt="Scale Your Leads Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-3xl font-bold text-gray-900 font-cabinet-grotesk tracking-tight">
              Scale Your Leads
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}; 