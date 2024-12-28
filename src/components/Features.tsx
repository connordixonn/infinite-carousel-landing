import { DollarSign, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Enterprise Revenue Growth",
    description: "Maximize your revenue potential with our advanced analytics and targeting strategies.",
    icon: DollarSign,
    gradient: "from-sky-500/20 to-blue-400/20",
    iconColor: "text-sky-500",
    benefits: ["Revenue optimization", "Market expansion", "Profit maximization"]
  },
  {
    title: "Fortune 500 Acquisition",
    description: "Target and convert Fortune 500 companies with our proven enterprise methodologies.",
    icon: Building2,
    gradient: "from-blue-500/20 to-sky-400/20",
    iconColor: "text-blue-500",
    benefits: ["Strategic targeting", "Enterprise pipeline", "Key account management"]
  },
  {
    title: "Sustainable Growth",
    description: "Implement cutting-edge strategies for long-term, sustainable business growth.",
    icon: TrendingUp,
    gradient: "from-sky-500/20 to-blue-400/20",
    iconColor: "text-sky-500",
    benefits: ["Scalable solutions", "Growth automation", "Performance metrics"]
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
  title = "Enterprise Solutions", 
  subtitle,
  description 
}: FeaturesProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
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
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-sky-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};