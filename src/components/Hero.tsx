import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Drastically different background */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-navy via-theme-slate to-theme-charcoal">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#E8B860,transparent)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_600px_at_80%_80%,#7EC8E3,transparent)]" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute -left-24 top-1/4 w-96 h-96 bg-theme-gold/20 rounded-full mix-blend-overlay blur-3xl animate-pulse" />
          <div className="absolute -right-24 bottom-1/4 w-96 h-96 bg-theme-blue/20 rounded-full mix-blend-overlay blur-3xl animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6 animate-fadeIn">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-theme-gold/20 text-theme-tan backdrop-blur-sm">
              Enterprise Lead Generation Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-theme-white tracking-tight">
              Get more enterprise <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-theme-gold via-theme-blue to-theme-tan text-transparent bg-clip-text">
                customers
              </span>{" "}
              without <br className="hidden sm:block" />
              spending on bad marketing
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-theme-tan/80">
              We help you increase average contract values and bring in F1000 customers on autopilot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Button 
              className="bg-theme-gold hover:bg-theme-gold/90 text-theme-navy px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg group backdrop-blur-sm"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-theme-tan/20 hover:border-theme-gold/30 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg text-theme-tan hover:text-theme-white group backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 max-w-3xl mx-auto animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-theme-gold via-theme-blue to-theme-tan shadow-xl">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-theme-navy/80 backdrop-blur-sm">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn">
            {['500+', '99%', '$2M+', '45 days'].map((stat, index) => (
              <div key={index} className="text-center backdrop-blur-sm bg-theme-white/5 rounded-lg p-6">
                <div className="text-3xl font-bold text-theme-white mb-2">{stat}</div>
                <div className="text-sm text-theme-tan/80">
                  {index === 0 && 'Enterprise Clients'}
                  {index === 1 && 'Success Rate'}
                  {index === 2 && 'Average Deal Size'}
                  {index === 3 && 'Time to Close'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};