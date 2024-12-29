import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Primary background with noise texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-theme-white via-theme-blue/5 to-theme-tan/10">
          {/* Noise overlay */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              filter: 'contrast(200%) brightness(150%)',
            }}
          />
        </div>

        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(45deg, 
              ${encodeURIComponent('#000')} 25%, 
              transparent 25%, 
              transparent 75%, 
              ${encodeURIComponent('#000')} 75%, 
              ${encodeURIComponent('#000')})`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />

        {/* Accent elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-theme-gold/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-theme-blue/5 rounded-full filter blur-3xl"></div>
        </div>

        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-theme-white/50 to-transparent opacity-30"></div>
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
