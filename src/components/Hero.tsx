import { Button } from "./ui/button";
import { ArrowRight, BarChart2 } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-sky-50 text-sky-600 border border-sky-100">
              <BarChart2 className="w-4 h-4" />
              Enterprise Growth Platform
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
              Transform Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 text-transparent bg-clip-text">Enterprise Growth</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600">
              Empower your business with our enterprise-focused solutions and proven methodologies for sustainable growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg inline-flex items-center gap-2">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-sky-200 hover:border-sky-300 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg">
              View Case Studies
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { metric: "93%", label: "Customer Satisfaction" },
              { metric: "$2.4B+", label: "Revenue Generated" },
              { metric: "500+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200 shadow-lg">
                <div className="text-3xl font-bold text-sky-600 mb-1">{stat.metric}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};