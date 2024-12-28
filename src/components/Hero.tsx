import { Button } from "./ui/button";
import { ArrowRight, BarChart2 } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/40 text-primary border border-secondary">
              <BarChart2 className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise Growth Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Transform Your <br className="hidden sm:block" />
              <span className="text-primary">Enterprise Growth</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600">
              Empower your business with our enterprise-focused solutions and proven methodologies for sustainable growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary hover:border-primary/20 px-8 py-6 h-auto text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View Case Studies
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { metric: "93%", label: "Customer Satisfaction" },
              { metric: "$2.4B+", label: "Revenue Generated" },
              { metric: "500+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="p-6 rounded-xl bg-white shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-1">{stat.metric}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};