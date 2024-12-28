import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background grid pattern that spans the entire page */}
      <div className="fixed inset-0 bg-grid-slate-100 bg-[size:20px] pointer-events-none" />
      
      {/* Gradient orbs for visual interest */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      
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