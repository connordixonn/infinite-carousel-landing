import { Button } from "./ui/button";
import { Shield, Zap, BarChart3, Users } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance measures to protect your business data.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized infrastructure ensuring maximum uptime and lightning-fast performance.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights and real-time reporting for data-driven decision making.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless integration tools for enhanced team productivity and coordination.",
  },
];

export const EnterpriseSolutions = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful tools and solutions designed for modern enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-slate-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};