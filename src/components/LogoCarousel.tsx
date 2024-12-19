import { useEffect, useState } from "react";

const logos = [
  "/lovable-uploads/c0c3535b-c3e0-437c-8df6-de7b715f2932.png",
  "/lovable-uploads/c83ab66c-2a90-41d0-adcb-38f3f04e21cb.png",
  "/lovable-uploads/2582f734-90de-48b8-9271-d18a644a41b9.png",
  "/lovable-uploads/bc78a095-24ef-4b81-9272-87017b804733.png",
  "/lovable-uploads/e5f7c14a-e8d1-452c-93e3-810784cfc985.png",
  "/lovable-uploads/5157c2a9-7475-47e1-9313-d8ccab95146e.png",
];

export const LogoCarousel = () => {
  const [duplicatedLogos, setDuplicatedLogos] = useState<string[]>([]);

  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos, ...logos]);
  }, []);

  return (
    <div className="py-24 relative overflow-hidden border-y border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-600 uppercase tracking-wider mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="relative">
          <div className="flex space-x-16 animate-marquee">
            {duplicatedLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 group">
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};