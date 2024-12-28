import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-slate-200/[0.07] bg-[size:20px]" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />
      
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