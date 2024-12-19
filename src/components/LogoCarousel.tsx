import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

const logos = [
  "/lovable-uploads/c0c3535b-c3e0-437c-8df6-de7b715f2932.png", // Yamaha
  "/lovable-uploads/c83ab66c-2a90-41d0-adcb-38f3f04e21cb.png", // Nulo
  "/lovable-uploads/2582f734-90de-48b8-9271-d18a644a41b9.png", // UKG
  "/lovable-uploads/bc78a095-24ef-4b81-9272-87017b804733.png", // Hayward
  "/lovable-uploads/e5f7c14a-e8d1-452c-93e3-810784cfc985.png", // Wacom
  "/lovable-uploads/5157c2a9-7475-47e1-9313-d8ccab95146e.png", // PGW
];

export const LogoCarousel = () => {
  const [duplicatedLogos, setDuplicatedLogos] = useState<string[]>([]);

  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos, ...logos]);
  }, []);

  return (
    <div className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      <Separator className="mb-16 opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wide mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="relative">
          <div className="flex space-x-16 animate-marquee">
            {duplicatedLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 group">
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator className="mt-16 opacity-50" />
    </div>
  );
};