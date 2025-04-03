
import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-nutrition-green rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="hidden md:inline-block font-semibold text-xl text-gray-800">
              NourishAI
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center max-w-md w-full mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search foods, recipes..."
              className="pl-8 bg-slate-50 border-slate-200"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-nutrition-red rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-slate-200 px-4 py-3 animate-fade-in">
          <div className="relative w-full mb-3">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search foods, recipes..."
              className="pl-8 bg-slate-50 border-slate-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Button variant="ghost" className="justify-start">Dashboard</Button>
            <Button variant="ghost" className="justify-start">Meal Planner</Button>
            <Button variant="ghost" className="justify-start">Nutrition Tracking</Button>
            <Button variant="ghost" className="justify-start">Food Database</Button>
            <Button variant="ghost" className="justify-start">Profile</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
