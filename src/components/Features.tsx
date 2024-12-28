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

interface FeaturesProps {
  title: string;
  subtitle: string;
  description: string;
  variant: 'primary' | 'secondary';
}

export const Features = ({ title, subtitle, description, variant }: FeaturesProps) => {
  const isPrimary = variant === 'primary';

  return (
    <div className={`py-12 relative overflow-hidden ${isPrimary ? 'bg-white' : 'bg-[#F6F6F7]'}`}>
      <div className={`absolute inset-0 ${isPrimary ? 'bg-gradient-to-b from-white to-[#F6F6F7]' : 'bg-gradient-to-t from-white to-[#F6F6F7]'}`}></div>
      <div className="relative">
        <div className="text-center mb-16">
          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
            isPrimary ? 'bg-[#1EAEDB]/10 text-[#1EAEDB]' : 'bg-[#0EA5E9]/10 text-[#0EA5E9]'
          }`}>
            {subtitle}
          </span>
          <h2 className={`mt-6 text-4xl font-bold tracking-tight ${
            isPrimary ? 'text-[#222222]' : 'text-[#403E43]'
          }`}>
            {title}
          </h2>
          <p className="mt-4 text-lg text-[#555555] max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className={`group relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                isPrimary 
                  ? 'bg-white border-[#F1F1F1]' 
                  : 'bg-white/80 backdrop-blur-sm border-[#E5E7EB]'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 ${
                  isPrimary ? 'bg-[#1EAEDB]' : 'bg-[#0EA5E9]'
                }`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <ArrowUpRight className={`h-5 w-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                  isPrimary ? 'text-[#1EAEDB]' : 'text-[#0EA5E9]'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 group-hover:text-[#1EAEDB] transition-colors duration-300 ${
                isPrimary ? 'text-[#222222]' : 'text-[#403E43]'
              }`}>
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