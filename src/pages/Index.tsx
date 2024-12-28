import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/10 to-white" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-slate-200/[0.07] bg-[size:20px]" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Content */}
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