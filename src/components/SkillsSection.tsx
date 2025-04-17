
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  className?: string;
  style?: React.CSSProperties;
}

function SkillCategory({ title, skills, className, style }: SkillCategoryProps) {
  return (
    <Card className={cn("h-full card-hover", className)} style={style}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface CertificationCardProps {
  title: string;
  issuer: string;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}

function CertificationCard({ title, issuer, link, className, style }: CertificationCardProps) {
  return (
    <Card className={cn("card-hover", className)} style={style}>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{issuer}</CardDescription>
      </CardHeader>
      {link && (
        <CardContent className="pt-0">
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Certificate
            </a>
          </Button>
        </CardContent>
      )}
    </Card>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "JavaScript"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "SQL", "React"]
    },
    {
      title: "Tools",
      skills: ["Git", "Visual Studio", "Eclipse", "Tableau"]
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Mac"]
    }
  ];

  const certifications = [
    {
      title: "Web Design",
      issuer: "Anudip Foundation"
    },
    {
      title: "Python for Data Science",
      issuer: "Great Learning",
      link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-for-data-science3?utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin_certificate_share&utm_source_page=public_certificate_view"
    },
    {
      title: "Data Analytics",
      issuer: "Deloitte Australia",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Ef5oRAKk27xPZvHAW_1743501365798_completion_certificate.pdf"
    },
    {
      title: "Career Essentiala in Data Analysis by Microsoft and LinkedIn",
      issuer: "Microsoft and LinkedIn Learning",
      link: "https://www.linkedin.com/learning/certificates/a962abaa218c3baa1a6fe417a931636067a7c7d5ddfb99d151a2210342ea79d9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bhf2lDuQJQkGXzu5hNugFtg%3D%3D"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills & Certifications"
          subtitle="Technical expertise and credentials"
        />
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.title}
                title={cert.title}
                issuer={cert.issuer}
                link={cert.link}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
