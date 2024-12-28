import { DollarSign, Building2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Boost your Average Contract Value and Lifetime Value with our targeted strategies.",
    icon: DollarSign,
    gradient: "from-sky-500/20 to-blue-400/20",
    iconColor: "text-sky-500",
  },
  {
    title: "Enterprise Acquisition",
    description: "Attract and convert Fortune 1000 companies with our proven methodologies.",
    icon: Building2,
    gradient: "from-blue-500/20 to-sky-400/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Optimize Growth",
    description: "Implement cutting-edge ABM and outbound techniques for sustainable growth.",
    icon: TrendingUp,
    gradient: "from-sky-500/20 to-blue-400/20",
    iconColor: "text-sky-500",
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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-sky-50">
      <div className="absolute inset-0 bg-grid-slate-200/[0.1] bg-[size:20px]" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-slate-600 mb-4">{subtitle}</p>
          )}
          {description && (
            <p className="text-slate-500">{description}</p>
          )}
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "group relative bg-white rounded-2xl p-8",
                "transition-all duration-300 hover:scale-105",
                "border border-slate-200",
                "shadow-lg hover:shadow-xl"
              )}
            >
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
                "bg-gradient-to-br",
                feature.gradient
              )} />
              
              <div className="relative">
                <div className={cn(
                  "w-12 h-12 rounded-xl mb-6 flex items-center justify-center",
                  "bg-slate-50",
                  "group-hover:scale-110 transition-transform"
                )}>
                  <feature.icon className={cn("w-6 h-6", feature.iconColor)} />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
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