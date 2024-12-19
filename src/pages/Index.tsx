import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LogoCarousel />
      <Features />
      <CaseStudies />
    </div>
  );
};

export default Index;