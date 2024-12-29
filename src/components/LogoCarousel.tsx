import { useState } from "react";
import { LogoItem } from "./logo-carousel/LogoItem";
import { logos, testimonials } from "./logo-carousel/data";

export const LogoCarousel = () => {
  const [openPopover, setOpenPopover] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (logo: string) => {
    setLoadedImages(prev => new Set(prev).add(logo));
  };

  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-24 relative bg-gradient-to-b from-theme-white via-theme-blue/5 to-theme-white" role="region" aria-label="Logo Carousel">
      <div className="max-w-[100vw] mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-theme-navy">
          Trusted by Industry Leaders
        </h2>
        <div className="relative w-full overflow-hidden">
          <div 
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              willChange: 'transform',
              width: 'fit-content',
              display: 'flex',
              gap: '4rem',
              transform: 'translateX(0)',
              animation: 'scroll 90s linear infinite'
            }}
            className="flex items-center"
          >
            {tripleLogos.map((logo, idx) => (
              <LogoItem
                key={idx}
                logo={logo}
                index={idx}
                testimonial={testimonials[idx % testimonials.length]}
                isOpen={openPopover === idx}
                onMouseEnter={() => {
                  setOpenPopover(idx);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setOpenPopover(null);
                  setIsPaused(false);
                }}
                loadedImages={loadedImages}
                onImageLoad={handleImageLoad}
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
        `}
      </style>
    </div>
  );
};