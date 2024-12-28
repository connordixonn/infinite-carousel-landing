import { Button } from "./ui/button";

const caseStudies = [
  {
    title: "SaaS Growth Explosion",
    tags: ["SaaS", "Enterprise", "Growth"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: [
      { value: "450%", label: "Revenue Increase" },
      { value: "37", label: "New Enterprise Clients" },
      { value: "891%", label: "ROI" },
    ],
  },
  {
    title: "Fortune 500 Acquisition",
    tags: ["Fortune 500", "ABM", "Software"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: [
      { value: "$2M", label: "Deal Size" },
      { value: "45 days", label: "Time to Close" },
      { value: "$10M+", label: "Expansion Potential" },
    ],
  },
];

export const CaseStudies = () => {
  return (
    <div className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 bg-grid-slate-200/[0.1] bg-[size:20px]" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-16">
          Real Results, Real Growth
        </h2>
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
                      className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="aspect-video mb-8 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src={study.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-lg bg-sky-50">
                      <div className="text-2xl font-bold text-sky-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
            Book a Call
          </Button>
          <p className="mt-4 text-sm text-slate-600">
            Discover how we can transform your enterprise sales pipeline
          </p>
        </div>
      </div>
    </div>
  );
};