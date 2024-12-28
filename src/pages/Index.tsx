import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-slate-200/[0.1] bg-[size:20px] pointer-events-none" />
        <Hero />
        <div className="relative bg-gradient-to-b from-white/80 to-transparent">
          <LogoCarousel />
        </div>
        <div className="relative bg-gradient-to-b from-transparent via-sky-50/30 to-transparent">
          <Features 
            title="How We Help You Scale" 
            subtitle="Enterprise Growth Solutions"
            description="Unlock your business potential with our proven strategies"
            variant="primary"
          />
        </div>
        <div className="relative bg-gradient-to-b from-transparent to-white">
          <CaseStudies />
        </div>
      </div>
    </div>
  );
};

export default Index;