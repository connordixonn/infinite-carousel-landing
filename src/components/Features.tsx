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
    <div className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute right-0 top-0 -mt-24 transform translate-x-1/2">
        <div className="w-96 h-96 bg-[#60A5FA] opacity-20 rounded-full blur-3xl" />
      </div>
      <div className="absolute left-0 bottom-0 -mb-24 transform -translate-x-1/2">
        <div className="w-96 h-96 bg-[#93C5FD] opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#60A5FA]/10 via-[#93C5FD]/10 to-[#60A5FA]/10 text-[#60A5FA] ring-1 ring-[#60A5FA]/20">
            {subtitle}
          </span>
          <h2 className="mt-8 text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#60A5FA] to-gray-900">
            {title}
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            {description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative z-10 p-8 bg-white rounded-3xl transition-all duration-500 
                transform hover:-translate-y-2 hover:scale-[1.01]
                shadow-[0_4px_20px_-4px_rgba(96,165,250,0.1)]
                hover:shadow-[0_20px_40px_-4px_rgba(96,165,250,0.15)]">
                {/* Icon container */}
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#60A5FA] to-[#93C5FD] 
                  shadow-md mb-6 group-hover:shadow-lg transition-all duration-500
                  group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 
                  group-hover:text-[#60A5FA] transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="absolute top-8 right-8 transition-all duration-500 
                  opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-[#60A5FA]" />
                </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#60A5FA]/5 to-[#93C5FD]/5 
                rounded-3xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};