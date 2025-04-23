
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  const projects = [
    {
      title: "BeatBliss",
      description: "Music streaming web app with features like login, playlist creation, and song search",
      image: "/uploads/3967019f-9565-4358-8b98-123775919557.png",
      tech: ["Python", "Django"],
      github: "https://github.com/Jaira1320/BeatBliss-Music-Web-App.git"
    },
    {
      title: "Snake Game",
      description: "Classic Snake game with increasing difficulty and score tracking",
      image: "/uploads/bec36692-1091-4ec6-b75b-c58f303a7fd5.png",
      tech: ["Python", "Pygame"],
      github: "https://github.com/Jaira1320/snake-game.git"
    },
    {
      title: "Sales Dashboard",
      description: "Interactive dashboard to analyze customer and sales performance",
      image: "/uploads/ff14efd6-3aed-4848-a03f-09d50953b01a.png",
      tech: ["Tableau"],
      liveUrl: "https://public.tableau.com/views/SalesCustomerDashboards_17447131525650/SalesDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    },
    {
      title: "QuickBill",
      description: "Simple billing app for generating and managing invoices",
      image: "/uploads/ss.png", // Updated image path
      tech: ["React", "Node.js"],
      liveUrl: "https://quickbill-rouge.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Projects"
          subtitle="Check out some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
