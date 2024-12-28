import { ArrowUpRight, Building2, Timer } from "lucide-react";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Our targeted approach helps you land larger contracts and retain enterprise clients, significantly increasing your average contract value and lifetime value.",
    icon: ArrowUpRight,
  },
  {
    title: "Enterprise Customer Acquisition",
    description: "We specialize in connecting with and converting fortune 1000 companies through our proven enterprise outreach strategies.",
    icon: Building2,
  },
  {
    title: "Accelerated Sales Cycle",
    description: "Our proven methodology shortens the enterprise sales cycle by engaging key decision-makers early and maintaining momentum throughout the process.",
    icon: Timer,
  },
];

export const Features = () => {
  return (
    <div className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjMyNDJmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-500/10 via-indigo-500/5 to-transparent blur-3xl"></div>
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-transparent blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20 mb-6">
            Enterprise Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent mb-6">
            Transform Your Enterprise Sales
          </h2>
          <p className="mt-4 text-lg text-indigo-200/80 font-light max-w-2xl mx-auto">
            Unlock new levels of growth with our enterprise-focused approach
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative p-8 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-400 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300/90 leading-relaxed group-hover:text-white/90">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};