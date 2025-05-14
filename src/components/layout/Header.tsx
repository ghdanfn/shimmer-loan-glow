
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { toast } from "@/hooks/use-toast";

const menuItems = [
  { label: "صفحه اصلی", href: "/" },
  { label: "وام شخصی", href: "/loan-request" },
  { label: "وام تجاری", href: "/loan-request" },
  { label: "نحوه کار", href: "/#how-it-works" },
  { label: "درباره ما", href: "/contact" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      // For hash links on current page
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If not on the homepage, navigate there first
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(path.substring(2));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // For separate pages
      navigate(path);
      
      // Show toast for navigation
      const pageName = menuItems.find(item => item.href === path)?.label || "صفحه";
      toast({
        title: `${pageName}`,
        description: `به ${pageName} منتقل شدید`,
        variant: "default",
      });
    }
  };

  const handleLoanRequest = () => {
    navigate("/loan-request");
    toast({
      title: "درخواست وام",
      description: "به صفحه درخواست وام منتقل شدید",
      variant: "default",
    });
  };

  const handleLogin = () => {
    // In a real app, navigate to login page
    toast({
      title: "ورود به حساب کاربری",
      description: "این بخش در حال تکمیل است",
      variant: "default",
    });
    console.log("Login button clicked");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/");
              }}
            >
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={handleLogin}
            >
              ورود
            </Button>
            <Button 
              className="bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
              onClick={handleLoanRequest}
            >
              درخواست وام
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="icon" aria-label="Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-4 text-base font-medium text-gray-800 hover:text-primary border-b border-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary"
              onClick={handleLogin}
            >
              ورود
            </Button>
            <Button 
              className="w-full bg-primary text-white shadow-md"
              onClick={handleLoanRequest}
            >
              درخواست وام
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
