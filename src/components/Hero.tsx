import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-theme-white via-theme-blue/10 to-theme-tan/20">
          {/* Animated wave patterns */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px auto',
              animation: 'wave 15s linear infinite',
            }}
          />

          {/* Decorative circles */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-theme-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-theme-blue/10 rounded-full blur-3xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z\'/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4 sm:space-y-6 animate-fadeIn">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-theme-gold/20 text-theme-navy backdrop-blur-sm">
              Enterprise Lead Generation Platform
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-theme-navy tracking-tight">
              Get more enterprise <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-theme-gold via-theme-blue to-theme-navy text-transparent bg-clip-text">
                customers
              </span>{" "}
              without <br className="hidden sm:block" />
              spending on bad marketing
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-theme-slate/80">
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
              className="border-2 border-theme-navy/20 hover:border-theme-gold/30 px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-lg text-theme-navy hover:text-theme-navy/80 group backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 max-w-3xl mx-auto animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden p-[2px] bg-gradient-to-r from-theme-gold via-theme-blue to-theme-navy shadow-xl">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-theme-white/80 backdrop-blur-sm">
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
              <div key={index} className="text-center backdrop-blur-sm bg-theme-white/80 rounded-lg p-6 shadow-lg border border-theme-navy/10">
                <div className="text-3xl font-bold text-theme-navy mb-2">{stat}</div>
                <div className="text-sm text-theme-slate/80">
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

      <style jsx>{`
        @keyframes wave {
          0% { background-position: 0 0; }
          100% { background-position: 100px 0; }
        }
      `}</style>
    </div>
  );
};
