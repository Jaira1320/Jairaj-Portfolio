
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="heading-gradient">Jairaj Singh Matta</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            BSc IT Student | Web Enthusiast | Data Explorer
          </h2>
          <p className="text-lg md:text-xl mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Driven by curiosity. Powered by creativity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              View My Work
            </Button>
            
          </div>
        </div>

        <div className="absolute bottom-10 right-1/2 animate-bounce hidden md:block">
           

          <Button 
            variant="ghost" 
            size="icon"
           
            className="rounded-full"
            onClick={scrollToProjects}
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
