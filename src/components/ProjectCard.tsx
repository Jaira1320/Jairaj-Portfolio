
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  liveUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  liveUrl,
  className,
  style,
}: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden card-hover h-full flex flex-col", className)} style={style}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      {(github || liveUrl) && (
        <CardFooter className="flex gap-2 pt-0">
          {github && (
            <Button asChild variant="outline" size="sm">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
