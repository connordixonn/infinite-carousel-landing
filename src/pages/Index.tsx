import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <LogoCarousel />
        <Features />
        <CaseStudies />
      </div>
    </div>
  );
};

export default Index;