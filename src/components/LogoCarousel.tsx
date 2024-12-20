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
  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-16 py-24">
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
                    className="w-[400px] z-[9999] bg-white shadow-lg rounded-lg border-0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.3)] absolute bottom-full mb-4"
                    side="bottom"
                    align="center"
                    sideOffset={10}
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                            {testimonials[idx % testimonials.length].company.charAt(0)}
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium text-gray-900">
                              {testimonials[idx % testimonials.length].from}
                            </p>
                            <p className="text-xs text-gray-500">
                              to me
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                            Call Booked
                          </span>
                          <span className="text-xs text-gray-500">
                            2:30 PM
                          </span>
                        </div>
                      </div>

                      <h3 className="text-base font-medium text-gray-900 mb-3">
                        {testimonials[idx % testimonials.length].subject}
                      </h3>

                      <div className="text-sm text-gray-600">
                        <p className="leading-relaxed">
                          {testimonials[idx % testimonials.length].message}
                        </p>
                        
                        <div className="pt-4 border-t mt-4">
                          <p className="text-sm font-medium text-gray-900">
                            {testimonials[idx % testimonials.length].company}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonials[idx % testimonials.length].title}
                          </p>
                          <p className="text-sm font-medium text-blue-600 mt-1">
                            {testimonials[idx % testimonials.length].revenue}
                          </p>
                        </div>
                      </div>
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