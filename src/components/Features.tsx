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
    <div className="py-32 relative overflow-hidden bg-[#1a1f36]">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#60A5FA]/10 blur-3xl transform rotate-12"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Transform Your Enterprise Sales
          </h2>
          <p className="mt-4 text-lg text-blue-100/80">
            Unlock new levels of growth with our enterprise-focused approach
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="relative p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:translate-y-[-4px] group"
            >
              <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-br from-[#0EA5E9] to-[#60A5FA] rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-[#0f172a] group-hover:text-[#0EA5E9] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#334155] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};