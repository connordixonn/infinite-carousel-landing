import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div>
        <Hero />
        <LogoCarousel />
        <div className="flex flex-col">
          <Features 
            title="Transform Your Enterprise Sales" 
            subtitle="Enterprise Solutions"
            description="Unlock new levels of growth with our enterprise-focused approach"
            variant="primary"
          />
          <Features 
            title="Innovate & Grow" 
            subtitle="Creative Solutions"
            description="Embrace the future with our innovative approach to business growth"
            variant="secondary"
          />
        </div>
        <CaseStudies />
      </div>
    </div>
  );
};

export default Index;