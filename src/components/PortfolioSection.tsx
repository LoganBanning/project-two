import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Badge } from "./ui/badge.tsx";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://your-ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://your-task-manager-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using multiple weather APIs with beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "Weather API", "CSS Grid", "PWA"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://your-weather-demo.com"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and automated insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Next.js", "D3.js", "Python", "Flask", "PostgreSQL"],
      github: "https://github.com/yourusername/social-analytics",
      demo: "https://your-analytics-demo.com"
    },
    {
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform with user profiles, recipe ratings, meal planning, and shopping list generation.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Cloud Functions"],
      github: "https://github.com/yourusername/recipe-platform",
      demo: "https://your-recipe-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "https://github.com/yourusername/portfolio-v2",
      demo: "https://your-portfolio-demo.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-primary mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently. Each project represents 
            a unique challenge and showcases different aspects of my development skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}