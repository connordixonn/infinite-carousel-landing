import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-sky-100 text-sky-600">
              Enterprise Growth Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Scale Your Enterprise <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 text-transparent bg-clip-text">Without Limits</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600">
              Transform your business with our enterprise-focused solutions and proven methodologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Start Scaling Now
            </Button>
            <Button variant="outline" className="border-2 border-sky-200 hover:border-sky-300 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};