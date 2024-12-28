import { Button } from "./ui/button";
import { ArrowRight, Trophy, TrendingUp, DollarSign } from "lucide-react";

const caseStudies = [
  {
    title: "Fortune 100 Tech Giant",
    tags: ["Enterprise", "Digital Transformation", "Growth"],
    stats: [
      { value: "450%", label: "Revenue Growth", icon: TrendingUp },
      { value: "$50M+", label: "New Revenue", icon: DollarSign },
      { value: "891%", label: "ROI", icon: Trophy },
    ],
    description: "Transformed their enterprise sales approach, resulting in unprecedented growth and market expansion.",
    logoUrl: "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734675094/SYL_website_ready_suu7uf.png"
  },
  {
    title: "Global Financial Leader",
    tags: ["Finance", "Enterprise", "Digital"],
    stats: [
      { value: "$2.4B", label: "Deal Size", icon: DollarSign },
      { value: "45 days", label: "Implementation", icon: TrendingUp },
      { value: "$10M+", label: "Annual Savings", icon: Trophy },
    ],
    description: "Revolutionized their digital infrastructure while maintaining compliance and security standards.",
    logoUrl: "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734675094/SYL_website_ready_suu7uf.png"
  },
];

export const CaseStudies = () => {
  return (
    <div className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4">
          Enterprise Success Stories
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          See how leading enterprises have transformed their businesses with our solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              <div className="p-8">
                <div className="flex gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm font-medium border border-sky-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h3>
                <p className="text-slate-600 mb-6">{study.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <stat.icon className="w-5 h-5 text-sky-500 mb-2" />
                      <div className="text-2xl font-bold text-sky-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <img
                  src={study.logoUrl}
                  alt={`${study.title} logo`}
                  className="h-12 w-auto object-contain mb-6 opacity-50"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg inline-flex items-center gap-2">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="mt-4 text-sm text-slate-600">
            Discover how we can transform your enterprise operations
          </p>
        </div>
      </div>
    </div>
  );
};