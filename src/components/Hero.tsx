import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-theme-navy">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal Stripes */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(126,200,227,0.05)_25%,rgba(126,200,227,0.05)_50%,transparent_50%,transparent_75%,rgba(126,200,227,0.05)_75%)] bg-[length:128px_128px] animate-[slide_60s_linear_infinite]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-theme-primary opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-theme-secondary opacity-10 blur-[80px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6 animate-fadeIn">
            {/* Branded Tag */}
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-primary text-white shadow-glow">
              <span className="text-sm font-medium">Enterprise Lead Generation Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-theme-white">Get more enterprise</span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                customers
              </span>
              <br className="hidden sm:block" />
              <span className="text-theme-white">without wasting money</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-xl text-theme-warm">
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
              className="group px-8 py-6 rounded-xl border-2 border-theme-warm/20 hover:border-theme-secondary/30 bg-theme-navy/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform text-theme-secondary" />
              <span className="text-lg text-theme-warm group-hover:text-theme-white">Watch Demo</span>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn">
            {[
              { value: '500+', label: 'Enterprise Clients' },
              { value: '99%', label: 'Success Rate' },
              { value: '$2M+', label: 'Average Deal Size' },
              { value: '45 days', label: 'Time to Close' }
            ].map((stat, index) => (
              <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-theme-navy/50 to-theme-navy/30 backdrop-blur-sm border border-theme-warm/10 hover:shadow-glow transition-all duration-500">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-theme-warm group-hover:text-theme-white transition-colors">
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