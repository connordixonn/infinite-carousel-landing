import { ArrowUpRight, Building2, Timer, Rocket } from "lucide-react";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Our targeted approach helps you land larger contracts and retain enterprise clients, significantly increasing your average contract value and lifetime value.",
    icon: ArrowUpRight,
    gradient: "from-[#0EA5E9] to-[#33C3F0]"
  },
  {
    title: "Enterprise Customer Acquisition",
    description: "We specialize in connecting with and converting fortune 1000 companies through our proven enterprise outreach strategies.",
    icon: Building2,
    gradient: "from-[#1EAEDB] to-[#0FA0CE]"
  },
  {
    title: "Accelerated Sales Cycle",
    description: "Our proven methodology shortens the enterprise sales cycle by engaging key decision-makers early and maintaining momentum throughout the process.",
    icon: Timer,
    gradient: "from-[#33C3F0] to-[#0EA5E9]"
  },
];

interface FeaturesProps {
  title: string;
  subtitle: string;
  description: string;
  variant: 'primary' | 'secondary';
}

export const Features = ({ title, subtitle, description }: FeaturesProps) => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Pattern - More subtle */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.08) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs - More subtle */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#0EA5E9]/10 to-[#33C3F0]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#1EAEDB]/10 to-[#0FA0CE]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Reduced prominence */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-semibold text-gray-900">
            {title}
          </h2>
          <p className="text-lg leading-7 text-gray-600">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Feature Card - More subtle */}
              <div className="relative h-full rounded-2xl bg-white p-6 transition-all duration-300 
                hover:translate-y-[-4px] hover:shadow-lg
                border border-gray-100">
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient}/10
                  mb-4 group-hover:scale-105 transition-all duration-300`}>
                  <feature.icon className="w-5 h-5 text-[#0EA5E9]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 transition-all duration-300 
                  opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="w-4 h-4 text-[#0EA5E9]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};