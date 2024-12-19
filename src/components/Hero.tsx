import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#60A5FA]/5"></div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#60A5FA] to-[#1a1f36] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#60A5FA]/10 text-[#60A5FA]">
              Enterprise Lead Generation Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              Get more enterprise <br className="hidden sm:block" />
              <span className="text-[#60A5FA]">enterprise customers</span> without <br className="hidden sm:block" />
              spending on bad marketing
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              We help you increase average contract values and bring in F1000 customers on autopilot.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-2 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg">
              Schedule Demo
            </Button>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#60A5FA]">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};