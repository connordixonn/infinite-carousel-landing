import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-slate-200/[0.1] bg-[size:20px]" />
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-violet-100 text-violet-600">
              Enterprise Growth Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Scale Your Enterprise <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Without Limits</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600">
              Transform your business with our enterprise-focused solutions and proven methodologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Start Scaling Now
            </Button>
            <Button variant="outline" className="border-2 border-violet-200 hover:border-violet-300 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-500">
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