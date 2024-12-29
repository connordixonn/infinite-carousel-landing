import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with original colors but new style */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-theme-white via-theme-tan to-theme-gray">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-theme-gold opacity-20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-40 w-80 h-80 bg-theme-blue opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-40 w-80 h-80 bg-theme-navy opacity-20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          {/* Mesh grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-[0.15]"></div>

          {/* Floating shapes */}
          <div className="absolute inset-0">
            <div className="absolute h-32 w-32 rounded-full border border-theme-gold/30 -top-16 -right-16"></div>
            <div className="absolute h-24 w-24 rounded-full border border-theme-blue/30 bottom-20 left-10"></div>
            <div className="absolute h-16 w-16 rounded-full border border-theme-navy/30 top-32 left-20"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6 animate-fadeIn">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-theme-gold/20 text-theme-navy backdrop-blur-sm">
              Enterprise Lead Generation Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-theme-navy tracking-tight">
              Get more enterprise <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-theme-gold via-theme-blue to-theme-navy text-transparent bg-clip-text">
                customers
              </span>{" "}
              without <br className="hidden sm:block" />
              spending on bad marketing
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-theme-slate/80">
              We help you increase average contract values and bring in F1000 customers on autopilot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Button 
              className="bg-theme-gold hover:bg-theme-gold/90 text-theme-navy px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg group backdrop-blur-sm"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-theme-navy/20 hover:border-theme-gold/30 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg text-theme-navy hover:text-theme-navy/80 group backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 max-w-3xl mx-auto animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-theme-gold via-theme-blue to-theme-navy shadow-xl">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-theme-white/80 backdrop-blur-sm">
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
              <div key={index} className="text-center backdrop-blur-sm bg-theme-white/80 rounded-lg p-6 shadow-lg border border-theme-navy/10">
                <div className="text-3xl font-bold text-theme-navy mb-2">{stat}</div>
                <div className="text-sm text-theme-slate/80">
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