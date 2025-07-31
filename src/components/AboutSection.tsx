import { Card, CardContent } from "./ui/card.tsx";
import { Code, Database, Globe, Smartphone } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Node.js, Express, PostgreSQL, MongoDB"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      description: "RESTful APIs, GraphQL, WebSockets, PWAs"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "React Native, Responsive Design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl text-primary">Hello, I'm Logan</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack web developer with over 5 years of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community. I 
                believe in writing clean, maintainable code and creating exceptional user experiences.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">React & TypeScript</span>
                <span className="text-sm text-muted-foreground">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Node.js & Express</span>
                <span className="text-sm text-muted-foreground">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">Database Design</span>
                <span className="text-sm text-muted-foreground">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="text-primary mb-4 flex justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}