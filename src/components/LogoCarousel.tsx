import { useState, useEffect } from "react";
import * as Popover from '@radix-ui/react-popover';

interface Testimonial {
  from: {
    name: string;
    domain: string;
  };
  subject: string;
  message: string;
  company: string;
  revenue: string;
}

const testimonials: Testimonial[] = [
  {
    from: { name: "john.smith", domain: "acme.com" },
    subject: "Re: Demo Follow-up",
    message: "Your platform has completely transformed how we handle our marketing operations. The ROI has been incredible.",
    company: "Acme Corp",
    revenue: "+127% Revenue",
  },
  // ... other testimonials
];

const logos = [
  "/lovable-uploads/c0c3535b-c3e0-437c-8df6-de7b715f2932.png",
  "/lovable-uploads/c83ab66c-2a90-41d0-adcb-38f3f04e21cb.png",
  "/lovable-uploads/2582f734-90de-48b8-9271-d18a644a41b9.png",
  "/lovable-uploads/bc78a095-24ef-4b81-9272-87017b804733.png",
  "/lovable-uploads/e5f7c14a-e8d1-452c-93e3-810784cfc985.png",
  "/lovable-uploads/5157c2a9-7475-47e1-9313-d8ccab95146e.png",
] as const;

export const LogoCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [openPopover, setOpenPopover] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [autoShowEnabled, setAutoShowEnabled] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (logo: string) => {
    setLoadedImages(prev => new Set(prev).add(logo));
  };

  const handlePopupShow = (index: number) => {
    setOpenPopover(index);
    setIsPaused(true);
  };

  const handlePopupHide = () => {
    setOpenPopover(null);
    setIsPaused(false);
  };

  // Auto-show functionality with position tracking
  useEffect(() => {
    if (!autoShowEnabled || imagesLoaded < logos.length) return;

    const interval = setInterval(() => {
      const newPosition = (currentPosition + 1) % logos.length;
      setCurrentPosition(newPosition);

      if (newPosition % 3 === 0) {
        handlePopupShow(newPosition);
        
        setTimeout(() => {
          if (autoShowEnabled) {
            handlePopupHide();
          }
        }, 3000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [autoShowEnabled, currentPosition, imagesLoaded]);

  // Reset position when carousel restarts
  useEffect(() => {
    const marqueeInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentPosition(0);
      }
    }, 15000);

    return () => clearInterval(marqueeInterval);
  }, [isPaused]);

  if (imagesLoaded < logos.length) {
    return <div className="py-16 flex justify-center">Loading...</div>;
  }

  return (
    <div className="py-16 relative" role="region" aria-label="Logo Carousel">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="mx-auto overflow-hidden">
          <div 
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              willChange: 'transform',
            }}
            className="flex animate-marquee space-x-16"
            onMouseEnter={() => {
              setIsHovered(true);
              setAutoShowEnabled(false);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              handlePopupHide();
              setTimeout(() => setAutoShowEnabled(true), 500);
            }}
          >
            {logos.concat(logos).map((logo, idx) => (
              <Popover.Root 
                key={idx}
                open={openPopover === idx}
              >
                <Popover.Trigger 
                  className="relative z-10 flex items-center outline-none group"
                  onMouseEnter={() => {
                    if (isHovered) handlePopupShow(idx);
                  }}
                  onMouseLeave={() => {
                    if (isHovered) handlePopupHide();
                  }}
                >
                  <div className="relative h-[80px] w-[160px] flex items-center justify-center">
                    {!loadedImages.has(logo) && (
                      <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
                    )}
                    <img
                      src={logo}
                      alt={`${testimonials[idx % testimonials.length].company} logo`}
                      className={`h-[80px] w-auto object-contain transition-all duration-300 transform
                                ${openPopover === idx ? 'scale-110 grayscale-0' : 'grayscale hover:grayscale-0 group-hover:scale-110'}
                                ${loadedImages.has(logo) ? 'opacity-100' : 'opacity-0'}`}
                      style={{ maxWidth: 'none' }}
                      onLoad={() => handleImageLoad(logo)}
                      loading="eager"
                    />
                  </div>
                </Popover.Trigger>

                {loadedImages.has(logo) && (
                  <Popover.Portal>
                    <Popover.Content
                      className="w-[320px] bg-white shadow-lg rounded-lg animate-email-pop z-[9999] fixed
                               origin-[center_bottom]"
                      sideOffset={5}
                      onMouseEnter={() => {
                        setIsPaused(true);
                        setAutoShowEnabled(false);
                      }}
                      onMouseLeave={() => {
                        if (!isHovered) {
                          handlePopupHide();
                          setTimeout(() => setAutoShowEnabled(true), 500);
                        }
                      }}
                    >
                      <div className="overflow-hidden rounded-lg">
                        <div className="px-3 py-2 bg-gray-50">
                          <h3 className="text-sm font-medium text-gray-900 mb-2">
                            {testimonials[idx % testimonials.length].subject}
                          </h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                                {testimonials[idx % testimonials.length].company.charAt(0)}
                              </div>
                              <div>
                                <div className="relative">
                                  <span className="text-xs font-medium text-gray-700 blur-[2px] select-none">
                                    {testimonials[idx % testimonials.length].from.name}
                                  </span>
                                  <span className="text-xs font-medium text-gray-700">
                                    @{testimonials[idx % testimonials.length].from.domain}
                                  </span>
                                </div>
                                <p className="text-[10px] text-gray-500">to me</p>
                              </div>
                            </div>
                            <span className="text-[10px] text-gray-500">12:30 PM</span>
                          </div>
                        </div>

                        <div className="px-3 py-2">
                          <p className="text-xs text-gray-600 mb-4">
                            {testimonials[idx % testimonials.length].message}
                          </p>
                          <div className="flex items-center justify-between text-[11px] pt-2">
                            <span className="text-green-600 font-medium">✓ Call Booked</span>
                            <div className="text-right">
                              <p className="text-[10px] text-gray-600 mb-0.5">
                                {testimonials[idx % testimonials.length].company}
                              </p>
                              <p className="text-blue-600 font-medium">
                                {testimonials[idx % testimonials.length].revenue}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover.Portal>
                )}
              </Popover.Root>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};