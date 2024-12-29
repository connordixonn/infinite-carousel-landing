import { ArrowUpRight, Building2, Timer, Rocket } from "lucide-react";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Our targeted approach helps you land larger contracts and retain enterprise clients, significantly increasing your average contract value and lifetime value.",
    icon: ArrowUpRight,
    color: "bg-theme-blue",
  },
  {
    title: "Enterprise Customer Acquisition",
    description: "We specialize in connecting with and converting fortune 1000 companies through our proven enterprise outreach strategies.",
    icon: Building2,
    color: "bg-theme-sky",
  },
  {
    title: "Accelerated Sales Cycle",
    description: "Our proven methodology shortens the enterprise sales cycle by engaging key decision-makers early and maintaining momentum throughout the process.",
    icon: Timer,
    color: "bg-theme-denim",
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
    <div className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-theme-graphite">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-gradient-to-br from-theme-navy via-theme-graphite to-theme-indigo opacity-90" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-theme-blue/10 text-theme-sky">
            {subtitle}
          </span>
          <h2 className="mt-8 text-5xl font-bold text-theme-cream">
            {title}
          </h2>
          <p className="mt-6 text-xl text-theme-stone">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-theme-navy/50 backdrop-blur-sm border border-theme-stone/10
                hover:border-theme-blue/20 transition-all duration-500 h-full">
                <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative space-y-6">
                  <div className={`inline-flex p-3 rounded-xl ${feature.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500`}>
                    <feature.icon className="w-6 h-6 text-theme-sky" />
                  </div>

                  <h3 className="text-xl font-semibold text-theme-cream group-hover:text-theme-sky transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-theme-stone text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute top-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-theme-sky" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};