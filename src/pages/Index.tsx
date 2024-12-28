import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      
      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      {/* Content */}
      <div className="relative">
        <Hero />
        <LogoCarousel />
        <Features 
          title="Enterprise Solutions" 
          subtitle="Powerful Features for Growing Businesses"
          description="Scale your operations with our enterprise-grade tools and solutions"
          variant="primary"
        />
        <CaseStudies />
      </div>
    </div>
  );
};

export default Index;