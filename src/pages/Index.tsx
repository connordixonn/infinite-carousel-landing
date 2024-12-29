import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed base background */}
      <div className="fixed inset-0 bg-gradient-to-b from-sky-50 to-white" />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 bg-grid-slate-100 bg-[size:20px] opacity-30 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main content container */}
      <div className="relative z-10">
        <Hero />
        <LogoCarousel />
        <Features />
        <CaseStudies />
      </div>
    </div>
  );
};

export default Index;