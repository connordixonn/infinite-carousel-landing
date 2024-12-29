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
    <div className="relative py-32 overflow-hidden bg-gradient-to-b from-theme-white via-theme-blue/5 to-theme-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7EC8E320_1px,transparent_1px),linear-gradient(to_bottom,#7EC8E320_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute right-0 top-0 -mt-24 transform translate-x-1/2">
        <div className="w-96 h-96 bg-theme-blue opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-theme-blue/10 text-theme-navy">
            {subtitle}
          </span>
          <h2 className="mt-8 text-5xl font-bold tracking-tight text-theme-navy">
            {title}
          </h2>
          <p className="mt-6 text-xl leading-8 text-theme-slate">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              <div className="relative z-10 p-8 bg-theme-white rounded-3xl transition-all duration-500 
                transform hover:-translate-y-2 hover:scale-[1.01]
                shadow-[0_4px_20px_-4px_rgba(126,200,227,0.1)]
                hover:shadow-[0_20px_40px_-4px_rgba(126,200,227,0.15)]">
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-theme-blue to-theme-slate 
                  shadow-md mb-6 group-hover:shadow-lg transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-theme-navy mb-4 
                  group-hover:text-theme-blue transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-theme-slate leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute top-8 right-8 transition-all duration-500 
                  opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-theme-blue" />
                </div>
              </div>

              <div className="absolute inset-0 z-0 bg-gradient-to-r from-theme-blue/5 to-theme-slate/5 
                rounded-3xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};