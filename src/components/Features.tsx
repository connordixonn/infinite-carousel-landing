import { DollarSign, Building2, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Increase ACV & LTV",
    description: "Boost your Average Contract Value and Lifetime Value with our targeted strategies.",
    icon: DollarSign,
  },
  {
    title: "Bring in Enterprise Customers",
    description: "Attract and convert Fortune 1000 companies with our proven methodologies.",
    icon: Building2,
  },
  {
    title: "Optimize Growth Strategies",
    description: "Implement cutting-edge ABM and outbound techniques for sustainable growth.",
    icon: TrendingUp,
  },
];

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

export const Features = ({ 
  title = "How We Help You Grow",
  subtitle,
  description 
}: FeaturesProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <h3 className="mt-2 text-xl text-gray-600">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="mt-4 text-gray-500">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white p-6 rounded-lg transition-all duration-200 hover:shadow-md"
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-left">
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