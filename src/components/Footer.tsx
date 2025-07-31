import { Button } from "./ui/button.tsx";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg">Logan Banning</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Full-stack web developer passionate about creating beautiful, 
              functional applications that make a difference in people's lives.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm text-left transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg">Let's Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground" asChild>
                <a href="mailto:logan.banning@email.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Logan Banning. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center mt-2 sm:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}