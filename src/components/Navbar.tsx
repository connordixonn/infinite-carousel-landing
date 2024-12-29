import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-[#60A5FA]">scaleyourleads</div>
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Case Studies</Button>
            <Button variant="ghost">About</Button>
            <Button className="bg-[#60A5FA] hover:bg-[#60A5FA]/90">Get Started</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};