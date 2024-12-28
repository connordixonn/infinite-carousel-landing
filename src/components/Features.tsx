import { ArrowUpRight, Building2, Timer, Rocket } from "lucide-react";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Our targeted approach helps you land larger contracts and retain enterprise clients, significantly increasing your average contract value and lifetime value.",
    icon: ArrowUpRight,
    gradient: "from-[#9b87f5] to-[#7E69AB]"
  },
  {
    title: "Enterprise Customer Acquisition",
    description: "We specialize in connecting with and converting fortune 1000 companies through our proven enterprise outreach strategies.",
    icon: Building2,
    gradient: "from-[#6E59A5] to-[#1A1F2C]"
  },
  {
    title: "Accelerated Sales Cycle",
    description: "Our proven methodology shortens the enterprise sales cycle by engaging key decision-makers early and maintaining momentum throughout the process.",
    icon: Timer,
    gradient: "from-[#8B5CF6] to-[#6E59A5]"
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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#1A1F2C] bg-opacity-95">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(155, 135, 245, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#9b87f5]/30 to-[#7E69AB]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#6E59A5]/30 to-[#8B5CF6]/30 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#9b87f5]/10 to-[#7E69AB]/10 text-[#D6BCFA] ring-1 ring-[#9b87f5]/20">
            {subtitle}
          </span>
          <h2 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#9b87f5] to-white">
            {title}
          </h2>
          <p className="text-xl leading-8 text-[#D6BCFA]/80">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Feature Card */}
              <div className="relative h-full rounded-3xl bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 
                hover:translate-y-[-8px] hover:scale-[1.02]
                border border-[#9b87f5]/10 hover:border-[#9b87f5]/20">
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient}
                  shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 
                  group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#9b87f5] 
                  group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {feature.title}
                </h3>
                <p className="text-[#D6BCFA]/80 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 transition-all duration-500 
                  opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-[#9b87f5]" />
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#9b87f5]/0 via-[#9b87f5]/20 to-[#7E69AB]/0 
                rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};