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
        <div className="flex flex-col lg:flex-row gap-8 px-4">
          <div className="w-full lg:w-1/2">
            <Features 
              title="Transform Your Enterprise Sales" 
              subtitle="Enterprise Solutions"
              description="Unlock new levels of growth with our enterprise-focused approach"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <Features 
              title="Scale Your Business" 
              subtitle="Growth Solutions"
              description="Take your business to the next level with our proven strategies"
            />
          </div>
        </div>
        <CaseStudies />
      </div>
    </div>
  );
};

export default Index;