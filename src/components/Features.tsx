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

const alternativeFeatures = [
  {
    title: "Innovation First",
    description: "Transform your business with cutting-edge solutions that put innovation at the forefront of your growth strategy.",
    icon: Rocket,
  },
  {
    title: "Creative Solutions",
    description: "Unlock new possibilities with our creative approach to problem-solving, designed to give you a competitive edge.",
    icon: Lightbulb,
  },
  {
    title: "Perfect Fit",
    description: "Our flexible solutions adapt to your unique needs, ensuring a perfect match for your business requirements.",
    icon: Puzzle,
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
  const currentFeatures = isPrimary ? features : alternativeFeatures;

  if (isPrimary) {
    return (
      <div className="py-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#60A5FA]/10 text-[#60A5FA]">
              {subtitle}
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#222222]">
              {title}
            </h2>
            <p className="mt-4 text-lg text-[#555555] max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentFeatures.map((feature) => (
              <div 
                key={feature.title}
                className="group relative rounded-2xl p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F1F1F1]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl shadow-md bg-[#60A5FA] group-hover:scale-105 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#60A5FA]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#60A5FA] transition-colors duration-300 text-[#222222]">
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
  }

  return (
    <div className="py-16 relative overflow-hidden bg-gradient-to-br from-[#60A5FA] to-[#93C5FD]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMzLjE4IDAgNi4xNzUtLjgyNCA4Ljc3MS0yLjI3MSAyLjU5Ni0xLjQ0NyA0Ljc4OS0zLjQ0IDYuMjI5LTUuODI5IDEuNDQtMi4zODkgMi4yNzEtNS4xODQgMi4yNzEtOC4xNzEgMC05Ljk0MS04LjA1OS0xOC0xOC0xOHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white">
            {subtitle}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentFeatures.map((feature) => (
            <div 
              key={feature.title}
              className="group relative rounded-2xl p-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/20 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};