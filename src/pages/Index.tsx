import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Main content */}
      <div className="relative">
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
    </div>
  );
};

export default Index;