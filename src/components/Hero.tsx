import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-200/[0.07] bg-[size:20px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6 animate-fade-up">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm">
              Enterprise Growth Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-cabinet">
              Scale Your Enterprise <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                Without Limits
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300">
              Transform your business with our enterprise-focused solutions and proven methodologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Start Scaling Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/20 hover:border-white/30 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg text-white backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm shadow-2xl">
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