import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-theme-white via-theme-blue/5 to-theme-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7EC8E320_1px,transparent_1px),linear-gradient(to_bottom,#7EC8E320_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute right-0 top-0 -mt-24 transform translate-x-1/2">
        <div className="w-96 h-96 bg-theme-blue opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6 animate-fadeIn">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-theme-blue/10 text-theme-navy">
              Enterprise Lead Generation Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-theme-navy tracking-tight">
              Get more enterprise <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-theme-blue to-theme-slate text-transparent bg-clip-text">
                customers
              </span>{" "}
              without <br className="hidden sm:block" />
              spending on bad marketing
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-theme-slate">
              We help you increase average contract values and bring in F1000 customers on autopilot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Button 
              className="bg-theme-blue hover:bg-theme-blue/90 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-theme-slate/20 hover:border-theme-blue/30 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg text-theme-slate hover:text-theme-navy group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 max-w-3xl mx-auto animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-theme-blue via-theme-slate to-theme-blue shadow-xl">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-theme-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn">
            {['500+', '99%', '$2M+', '45 days'].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-theme-navy mb-2">{stat}</div>
                <div className="text-sm text-theme-slate">
                  {index === 0 && 'Enterprise Clients'}
                  {index === 1 && 'Success Rate'}
                  {index === 2 && 'Average Deal Size'}
                  {index === 3 && 'Time to Close'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};