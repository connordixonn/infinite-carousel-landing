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
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F6F6F7]" />
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(96,165,250,0.07)'/%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#60A5FA]/10 text-[#60A5FA] mb-6">
            {subtitle}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/50 group-hover:ring-[#60A5FA]/30 transition-all duration-300" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#60A5FA] to-[#93C5FD] shadow-md group-hover:shadow-lg transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#60A5FA]" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-[#60A5FA] transition-colors duration-300">
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