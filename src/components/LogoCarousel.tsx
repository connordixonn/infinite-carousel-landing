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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollSpeed = 2;
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + scrollSpeed;
        return newPosition > 100 ? 0 : newPosition;
      });
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="mx-auto">
          <div className="flex overflow-hidden space-x-16">
            {logos.concat(logos).map((logo, idx) => (
              <HoverCard key={idx}>
                <HoverCardTrigger>
                  <img
                    src={logo}
                    alt={`Client logo ${idx + 1}`}
                    className="h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    style={{
                      transform: `translateX(-${scrollPosition}%)`,
                    }}
                  />
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 z-[999]"
                  side="top"
                  align="center"
                >
                  <div className="space-y-4">
                    <div className="border-b pb-2">
                      <p className="text-sm text-gray-500">{testimonials[idx % testimonials.length].from}</p>
                      <p className="font-medium">{testimonials[idx % testimonials.length].subject}</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {testimonials[idx % testimonials.length].message}
                    </p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {testimonials[idx % testimonials.length].company}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonials[idx % testimonials.length].title}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-blue-500">
                        {testimonials[idx % testimonials.length].revenue}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};