import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <LogoCarousel />
      <Features 
        title="How We Help You Scale" 
        subtitle="Enterprise Growth Solutions"
        description="Unlock your business potential with our proven strategies"
        variant="primary"
      />
      <CaseStudies />
    </div>
  );
};

export default Index;