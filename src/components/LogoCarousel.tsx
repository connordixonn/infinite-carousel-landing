import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
    from: "j•••••@acme.com",
    subject: "Re: Demo Follow-up",
    message: "Your platform has completely transformed how we handle our marketing operations. The ROI has been incredible.",
    company: "Acme Corp",
    title: "Head of Growth",
    revenue: "+127% Revenue",
  },
  {
    from: "m•••••@tech.com",
    subject: "Platform Success",
    message: "We've seen a 3x increase in qualified enterprise leads since implementing your solution.",
    company: "Tech Giants Inc",
    title: "VP of Sales",
    revenue: "+312% Pipeline",
  },
  {
    from: "s•••••@startup.io",
    subject: "Amazing Results",
    message: "The enterprise-focused features have helped us land several Fortune 500 clients in record time.",
    company: "Startup Success",
    title: "CEO",
    revenue: "+89% Win Rate",
  },
];

export const LogoCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="mx-auto overflow-hidden">
          <div 
            className={`flex animate-marquee space-x-16 ${isHovered ? 'animate-marquee-slow' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {logos.concat(logos).map((logo, idx) => (
              <div key={idx} className="relative z-10 flex items-center group">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <img
                      src={logo}
                      alt={`Client logo ${idx + 1}`}
                      className="h-[120px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      style={{ maxWidth: 'none' }}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent 
                    className="w-[250px] z-[9999] bg-white shadow-lg rounded-xl border-0 
                    shadow-[0_2px_10px_-4px_rgba(0,0,0,0.3)] animate-bubble-pop
                    absolute top-[-120%] left-1/2 transform -translate-x-1/2"
                    sideOffset={10}
                  >
                    <div className="p-3 relative">
                      <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 
                        w-4 h-4 bg-white rotate-45"></div>
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-green-50 text-green-700 rounded-full">
                          Call Booked
                        </span>
                        <p className="text-[10px] font-medium text-blue-600">
                          {testimonials[idx % testimonials.length].revenue}
                        </p>
                      </div>

                      <p className="text-xs text-gray-600">
                        {testimonials[idx % testimonials.length].message}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};