import { ArrowUpRight, Building2, Timer, Rocket, Lightbulb, Puzzle } from "lucide-react";

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

export const Features = ({ title, subtitle, description }: FeaturesProps) => {
  return (
    <div className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F6F7] to-white" />
      <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#60A5FA]/5 blur-[120px] rounded-full" />
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#93C5FD]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#60A5FA]/10 to-[#93C5FD]/10 text-[#60A5FA] mb-6 border border-[#60A5FA]/20"
          >
            {subtitle}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Card Background */}
              <div className="absolute inset-0 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(96,165,250,0.1)] ring-1 ring-gray-200/50 transition-all duration-500 group-hover:shadow-[0_8px_30px_-4px_rgba(96,165,250,0.2)] group-hover:ring-[#60A5FA]/30" />
              
              <div className="relative">
                {/* Icon and Arrow Section */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#60A5FA] to-[#93C5FD] shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowUpRight 
                    className="h-5 w-5 opacity-0 transform translate-x-2 transition-all duration-500 text-[#60A5FA] group-hover:opacity-100 group-hover:translate-x-0" 
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 transition-colors duration-500 group-hover:text-[#60A5FA]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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