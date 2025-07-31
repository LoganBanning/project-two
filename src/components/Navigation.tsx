import { Button } from "./ui/button.tsx";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-primary">Logan Banning</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="flex space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}