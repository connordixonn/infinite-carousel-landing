import { useEffect, useState } from "react";
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
  const [openPopover, setOpenPopover] = useState<number | null>(null);

  return (
    <div className="py-16 relative">
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
              <Popover.Root 
                key={idx}
                open={openPopover === idx}
                onOpenChange={(open) => setOpenPopover(open ? idx : null)}
              >
                <Popover.Trigger 
                  className="relative z-10 flex items-center outline-none"
                  onMouseEnter={() => setOpenPopover(idx)}
                  onMouseLeave={() => setOpenPopover(null)}
                >
                  <img
                    src={logo}
                    alt={`Client logo ${idx + 1}`}
                    className="h-[80px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ maxWidth: 'none' }}
                  />
                </Popover.Trigger>

                <Popover.Portal>
                  <Popover.Content
                    className="w-[280px] bg-white shadow-md rounded-sm animate-bubble-pop
                             z-[9999] data-[state=open]:animate-bubble-pop fixed"
                    sideOffset={5}
                    onMouseEnter={() => setOpenPopover(idx)}
                    onMouseLeave={() => setOpenPopover(null)}
                  >
                    <div className="border border-gray-200 divide-y divide-gray-100">
                      <div className="px-3 py-2 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                              {testimonials[idx % testimonials.length].company.charAt(0)}
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-700">
                                {testimonials[idx % testimonials.length].from}
                              </p>
                              <p className="text-[10px] text-gray-500">to me</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-gray-500">12:30 PM</span>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-white">
                        <p className="text-xs text-gray-600 mb-3">
                          {testimonials[idx % testimonials.length].message}
                        </p>
                        
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-green-600 font-medium">
                            ✓ Call Booked
                          </span>
                          <span className="text-blue-600 font-medium">
                            {testimonials[idx % testimonials.length].revenue}
                          </span>
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