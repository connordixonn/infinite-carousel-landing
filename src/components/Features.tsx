import { DollarSign, Building2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Boost your Average Contract Value and Lifetime Value with our targeted strategies.",
    icon: DollarSign,
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
  },
  {
    title: "Enterprise Acquisition",
    description: "Attract and convert Fortune 1000 companies with our proven methodologies.",
    icon: Building2,
    gradient: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-600",
  },
  {
    title: "Optimize Growth",
    description: "Implement cutting-edge ABM and outbound techniques for sustainable growth.",
    icon: TrendingUp,
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
  },
];

interface FeaturesProps {
  variant?: 'primary' | 'secondary';
  title?: string;
  subtitle?: string;
  description?: string;
}

export const Features = ({ 
  variant = 'primary',
  title = "How We Help You Scale", 
  subtitle,
  description 
}: FeaturesProps) => {
  return (
    <section className="relative py-24">
      {/* Semi-transparent section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white/50 to-white/80 backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 font-cabinet">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
          )}
          {description && (
            <p className="text-gray-500">{description}</p>
          )}
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative rounded-2xl p-8",
                "transition-all duration-300 hover:scale-105",
                "border border-white/50 shadow-lg hover:shadow-xl",
                "bg-white/60 backdrop-blur-md"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
                "bg-gradient-to-br",
                feature.gradient
              )} />
              
              <div className="relative">
                <div className={cn(
                  "w-12 h-12 rounded-xl mb-6 flex items-center justify-center",
                  "bg-blue-50",
                  "group-hover:scale-110 transition-transform"
                )}>
                  <feature.icon className={cn("w-6 h-6", feature.iconColor)} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
    </section>
  );
};