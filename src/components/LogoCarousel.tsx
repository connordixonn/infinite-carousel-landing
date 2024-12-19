import { useEffect, useState } from "react";

const logos = [
  "/lovable-uploads/8a26ae46-67e7-4620-95a5-ca0c6f8c4273.png",
  // Add more logo paths here
];

export const LogoCarousel = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
          WE BRING OUR CLIENTS WHALES
        </p>
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {logos.concat(logos).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="Client logo"
                className="h-8 w-auto grayscale opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};