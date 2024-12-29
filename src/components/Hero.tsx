import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-theme-pearl">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-primary opacity-10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-warm opacity-10 blur-3xl animate-pulse" />
        
        {/* Animated Lines */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(126,200,227,0.1) 100px, rgba(126,200,227,0.1) 102px)`,
          animation: 'slide 60s linear infinite',
          backgroundSize: '141.42% 141.42%'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6 animate-fadeIn">
            {/* Branded Tag */}
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-theme-primary to-theme-secondary text-white shadow-glow">
              <span className="text-sm font-medium">Enterprise Lead Generation Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-theme-navy">Get more enterprise</span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-navy bg-clip-text text-transparent">
                customers
              </span>
              <br className="hidden sm:block" />
              <span className="text-theme-navy">without wasting money</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-xl text-theme-slate">
              We help you increase average contract values and bring in F1000 customers on autopilot.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Button 
              className="group relative px-8 py-6 rounded-xl overflow-hidden bg-gradient-primary hover:shadow-glow transition-all duration-500"
            >
              <span className="relative z-10 text-white text-lg flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-theme-primary to-theme-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>

            <Button 
              variant="outline" 
              className="group px-8 py-6 rounded-xl border-2 border-theme-slate/20 hover:border-theme-secondary/30 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform text-theme-secondary" />
              <span className="text-lg text-theme-slate group-hover:text-theme-navy">Watch Demo</span>
            </Button>
          </div>

          {/* Video Section */}
          <div className="mt-16 max-w-4xl mx-auto animate-fadeIn">
            <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-navy shadow-glow">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-theme-navy">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '99%', label: 'Success Rate' },
              { value: '$2M+', label: 'Average Deal Size' },
              { value: '45 days', label: 'Time to Close' }
            ].map((stat, index) => (
              <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm border border-white/20 hover:shadow-glow transition-all duration-500">
                <div className="text-3xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-theme-slate group-hover:text-theme-navy transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-50%) translateY(-50%) rotate(0deg);
            }
            100% {
              transform: translateX(-50%) translateY(-50%) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};