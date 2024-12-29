import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div>
        <Hero />
        <LogoCarousel />
        <Features 
          title="Transform Your Enterprise Sales" 
          subtitle="Enterprise Solutions"
          description="Unlock new levels of growth with our enterprise-focused approach"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default Index;