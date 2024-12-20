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
    revenue: "$203k ARR"
  },
  {
    from: "s•••••@tesla.com",
    subject: "Great Results!",
    message: "We've seen a 3x improvement in our conversion rates since implementing your solution.",
    company: "Tesla",
    title: "Marketing Director",
    revenue: "$450k ARR"
  },
  {
    from: "m•••••@meta.com",
    subject: "Partnership Discussion",
    message: "The team has been incredibly impressed with the results. Looking forward to expanding our usage.",
    company: "Meta",
    title: "VP Marketing",
    revenue: "$780k ARR"
  },
  {
    from: "r•••••@apple.com",
    subject: "Success Story",
    message: "Your solution has helped us scale our enterprise marketing efforts significantly.",
    company: "Apple",
    title: "CMO",
    revenue: "$1.2M ARR"
  },
  {
    from: "d•••••@microsoft.com",
    subject: "Excellent Results",
    message: "The impact on our marketing efficiency has been remarkable. Great work!",
    company: "Microsoft",
    title: "Marketing Lead",
    revenue: "$890k ARR"
  },
  {
    from: "p•••••@google.com",
    subject: "Fantastic ROI",
    message: "We've achieved amazing results with your platform. The team is very impressed.",
    company: "Google",
    title: "Growth Manager",
    revenue: "$670k ARR"
  }
];

export const LogoCarousel = () => {
  const [duplicatedLogos, setDuplicatedLogos] = useState<string[]>([]);

  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos, ...logos]);
  }, []);

  return (
    <div className="py-24 relative overflow-visible border-y border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-600 uppercase tracking-wider mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="relative overflow-visible">
          <div className="flex space-x-16 animate-marquee overflow-visible">
            {duplicatedLogos.map((logo, idx) => (
              <HoverCard key={idx}>
                <HoverCardTrigger className="relative z-20">
                  <div className="flex-shrink-0 group cursor-pointer">
                    <img
                      src={logo}
                      alt="Client logo"
                      className="h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 z-50" side="top" align="center">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {testimonials[idx % testimonials.length].subject}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonials[idx % testimonials.length].from}
                      </p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-[#F2FCE2] text-green-700 rounded">
                      Call Booked
                    </span>
                  </div>
                  <div className="h-px bg-gray-100 my-2" />
                  <p className="text-sm text-gray-600 mb-4">
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
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};