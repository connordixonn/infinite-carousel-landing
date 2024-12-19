import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
        <div className="space-y-8">
          <p className="text-sm font-medium text-[#60A5FA] uppercase tracking-wide">
            ENTERPRISE LEAD GENERATION PLATFORM
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Get more enterprise customers without spending a cent on bad marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We help you do just that on autopilot - we specialize in increasing average contract values and bringing in F1000 customers.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-[#60A5FA] hover:bg-blue-500 text-white px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Free
            </Button>
            <Button variant="outline" className="px-8 py-3 border-2 shadow-md hover:shadow-lg transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};