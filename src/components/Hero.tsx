import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 max-w-4xl mx-auto">
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          ENTERPRISE LEAD GENERATION PLATFORM
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Get more enterprise customers without spending a cent on bad marketing
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          We help you do just that on autopilot - we specialize in increasing average contract values and bringing in F1000 customers.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
            Get Started Free
          </Button>
          <Button variant="outline" className="px-8 py-3">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
};