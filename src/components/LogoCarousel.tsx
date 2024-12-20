import { useState, useEffect } from "react";
import * as Popover from '@radix-ui/react-popover';

const logos = [
  "/lovable-uploads/c0c3535b-c3e0-437c-8df6-de7b715f2932.png",
  "/lovable-uploads/c83ab66c-2a90-41d0-adcb-38f3f04e21cb.png",
  "/lovable-uploads/2582f734-90de-48b8-9271-d18a644a41b9.png",
  "/lovable-uploads/bc78a095-24ef-4b81-9272-87017b804733.png",
  "/lovable-uploads/e5f7c14a-e8d1-452c-93e3-810784cfc985.png",
  "/lovable-uploads/5157c2a9-7475-47e1-9313-d8ccab95146e.png",
];

const testimonials = [
  {
    from: { name: "john.smith", domain: "acme.com" },
    subject: "Re: Demo Follow-up",
    message: "Your platform has completely transformed how we handle our marketing operations. The ROI has been incredible.",
    company: "Acme Corp",
    revenue: "+127% Revenue",
  },
  {
    from: { name: "mary.johnson", domain: "tech.com" },
    subject: "Platform Success",
    message: "We've seen a 3x increase in qualified enterprise leads since implementing your solution.",
    company: "Tech Giants Inc",
    revenue: "+312% Pipeline",
  },
  {
    from: { name: "steve.williams", domain: "startup.io" },
    subject: "Amazing Results",
    message: "The enterprise-focused features have helped us land several Fortune 500 clients in record time.",
    company: "Startup Success",
    revenue: "+89% Win Rate",
  },
];

export const LogoCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [openPopover, setOpenPopover] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [autoShowEnabled, setAutoShowEnabled] = useState(true);
  const [lastInteractionTime, setLastInteractionTime] = useState(0);

  // Reset all states
  const resetStates = () => {
    setOpenPopover(null);
    setIsPaused(false);
    setAutoShowEnabled(true);
  };

  // Handle manual popup show
  const handlePopupShow = (index: number) => {
    setLastInteractionTime(Date.now());
    setOpenPopover(index);
    setIsPaused(true);
    setAutoShowEnabled(false);
  };

  // Handle manual popup hide
  const handlePopupHide = () => {
    setOpenPopover(null);
    setIsPaused(false);
    // Only re-enable auto-show if enough time has passed
    if (Date.now() - lastInteractionTime > 1000) {
      setAutoShowEnabled(true);
    }
  };

  // Auto-show functionality
  useEffect(() => {
    if (!autoShowEnabled) return;

    let currentIndex = 0;
    const showNextPopup = () => {
      if (!autoShowEnabled) return;
      
      handlePopupShow(currentIndex);
      
      setTimeout(() => {
        if (autoShowEnabled) {
          handlePopupHide();
          currentIndex = (currentIndex + 3) % logos.length; // Skip 3 logos
        }
      }, 3000);
    };

    const interval = setInterval(showNextPopup, 4000);
    
    return () => {
      clearInterval(interval);
    };
  }, [autoShowEnabled]);

  return (
    <div className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="mx-auto overflow-hidden">
          <div 
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            className="flex animate-marquee space-x-16"
            onMouseEnter={() => {
              setIsHovered(true);
              setAutoShowEnabled(false);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              handlePopupHide();
              // Add delay before re-enabling auto-show
              setTimeout(() => setAutoShowEnabled(true), 1000);
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
                  <img
                    src={logo}
                    alt={`Client logo ${idx + 1}`}
                    className={`h-[80px] w-auto object-contain transition-all duration-300 transform
                              ${openPopover === idx ? 'scale-110 grayscale-0' : 'grayscale hover:grayscale-0 group-hover:scale-110'}`}
                    style={{ maxWidth: 'none' }}
                  />
                </Popover.Trigger>

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
                        setTimeout(() => setAutoShowEnabled(true), 1000);
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
              </Popover.Root>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};