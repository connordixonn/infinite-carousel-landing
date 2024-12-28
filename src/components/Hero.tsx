import { Button } from "./ui/button";
import { ArrowRight, BarChart2 } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 shadow-lg">
            <BarChart2 className="w-4 h-4" />
            <span className="text-sm font-medium">Enterprise Growth Platform</span>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Transform Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Enterprise Growth
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-slate-300 leading-relaxed">
              Empower your business with our enterprise-focused solutions and proven methodologies for sustainable growth.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-slate-900 px-8 py-6 h-auto text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 h-auto text-lg backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Case Studies
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { metric: "93%", label: "Customer Satisfaction" },
              { metric: "$2.4B+", label: "Revenue Generated" },
              { metric: "500+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-[128px] opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-[128px] opacity-20" />
    </div>
  );
};