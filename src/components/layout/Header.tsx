
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "صفحه اصلی", href: "#" },
  { label: "وام شخصی", href: "#personal-loans" },
  { label: "وام تجاری", href: "#business-loans" },
  { label: "نحوه کار", href: "#how-it-works" },
  { label: "درباره ما", href: "#about" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">لـنــ<span className="text-secondary">ـدو</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              ورود
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
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
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="w-full border-primary text-primary">
              ورود
            </Button>
            <Button className="w-full bg-primary text-white">
              درخواست وام
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
