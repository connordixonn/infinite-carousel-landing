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
        <Features />
        <CaseStudies />
      </div>
    </div>
  );
};

export default Index;