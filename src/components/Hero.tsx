import { Button } from "./ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] bg-theme-navy overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-noise opacity-50 mix-blend-soft-light" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-theme-blue/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-theme-sky/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[90vh] items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 lg:pr-12">
            {/* Branded Tag */}
            <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-theme-graphite/30 border border-theme-blue/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2 text-theme-blue" />
              <span className="text-sm font-medium text-theme-cream">
                Enterprise Lead Generation Platform
              </span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-theme-cream block">Get more</span>
                <span className="text-theme-sky block">enterprise</span>
                <span className="text-theme-cream block">customers</span>
              </h1>
              
              <p className="text-xl text-theme-stone/90 max-w-xl">
                Transform your lead generation with our enterprise-focused platform. 
                Increase contract values and bring in F1000 customers on autopilot.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="group relative px-8 py-6 bg-theme-blue hover:bg-theme-sky transition-all duration-500 rounded-xl"
                >
                  <span className="relative z-10 text-theme-cream font-semibold text-lg flex items-center">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button 
                  variant="outline" 
                  className="group px-8 py-6 rounded-xl border-2 border-theme-stone/20 bg-theme-graphite/30 backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5 text-theme-sky" />
                  <span className="text-lg text-theme-stone">Watch Demo</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-screen h-full bg-theme-indigo/10 -skew-y-6 transform origin-top-right" />
            <div className="relative grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Enterprise Clients', color: 'bg-theme-blue' },
                { value: '99%', label: 'Success Rate', color: 'bg-theme-sky' },
                { value: '$2M+', label: 'Average Deal Size', color: 'bg-theme-denim' },
                { value: '45 days', label: 'Time to Close', color: 'bg-theme-indigo' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-theme-graphite/30 backdrop-blur-sm 
                    border border-theme-stone/10 hover:border-theme-blue/20 transition-all duration-500"
                >
                  <div className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative">
                    <div className="text-4xl font-bold text-theme-sky mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-theme-stone">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};