import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-[1000] shadow-sm h-16">
      <div className="absolute left-2.5 h-full flex items-center">
        <img 
          src="https://res.cloudinary.com/dqojf0xy1/image/upload/v1734675094/SYL_website_ready_suu7uf.png"
          alt="Scale Your Leads Logo"
          style={{ 
            width: '250px',
            height: 'auto',
            objectFit: 'contain'
          }}
          className="z-[1001]"
        />
      </div>
    </header>
  );
}; 