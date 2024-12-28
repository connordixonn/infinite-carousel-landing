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
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F6F6F7]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#1EAEDB]/10 text-[#1EAEDB]">
            Enterprise Solutions
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-[#222222] tracking-tight">
            Transform Your Enterprise Sales
          </h2>
          <p className="mt-4 text-lg text-[#555555] max-w-2xl mx-auto">
            Unlock new levels of growth with our enterprise-focused approach
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F1F1F1]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#1EAEDB] rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#1EAEDB] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#222222] group-hover:text-[#1EAEDB] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#555555] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};