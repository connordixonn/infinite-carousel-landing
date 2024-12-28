import { DollarSign, Building2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Boost your Average Contract Value and Lifetime Value with our targeted strategies.",
    icon: DollarSign,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Enterprise Acquisition",
    description: "Attract and convert Fortune 1000 companies with our proven methodologies.",
    icon: Building2,
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-500",
  },
  {
    title: "Optimize Growth",
    description: "Implement cutting-edge ABM and outbound techniques for sustainable growth.",
    icon: TrendingUp,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-500",
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-grid-slate-200/[0.07] bg-[size:20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4 font-cabinet">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 mb-4">{subtitle}</p>
          )}
          {description && (
            <p className="text-gray-400">{description}</p>
          )}
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8",
                "transition-all duration-300 hover:scale-105",
                "border border-white/10",
                "hover:border-white/20"
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
                  "bg-white/5 backdrop-blur-sm",
                  "group-hover:scale-110 transition-transform"
                )}>
                  <feature.icon className={cn("w-6 h-6", feature.iconColor)} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
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