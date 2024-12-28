import { DollarSign, Building2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Boost your Average Contract Value and Lifetime Value with our targeted strategies.",
    icon: DollarSign,
    gradient: "from-blue-500/20 to-cyan-400/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Bring in Enterprise Customers",
    description: "Attract and convert Fortune 1000 companies with our proven methodologies.",
    icon: Building2,
    gradient: "from-violet-500/20 to-purple-400/20",
    iconColor: "text-violet-500",
  },
  {
    title: "Optimize Growth Strategies",
    description: "Implement cutting-edge ABM and outbound techniques for sustainable growth.",
    icon: TrendingUp,
    gradient: "from-pink-500/20 to-rose-400/20",
    iconColor: "text-pink-500",
  },
];

interface FeaturesProps {
  variant?: 'primary' | 'secondary';
}

export const Features = ({ variant = 'primary' }: FeaturesProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100/[0.03] bg-[size:40px] dark:bg-grid-slate-700/[0.03]" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            How We Help You Grow
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative bg-white dark:bg-gray-900 rounded-2xl p-8",
                "transition-all duration-300 hover:scale-105",
                "border border-gray-200 dark:border-gray-800",
                "shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-xl"
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
                  "bg-gray-50 dark:bg-gray-800",
                  "group-hover:scale-110 transition-transform"
                )}>
                  <feature.icon className={cn("w-6 h-6", feature.iconColor)} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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