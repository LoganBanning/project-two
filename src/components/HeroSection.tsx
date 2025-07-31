import { Button } from "./ui/button.tsx";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-primary tracking-tight">
              Logan Banning
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              Full-Stack Web Developer
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web applications. 
            I specialize in React, Node.js, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="min-w-[200px]"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="min-w-[200px]"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
