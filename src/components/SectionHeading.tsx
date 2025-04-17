
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "center",
  className 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "max-w-2xl mx-auto",
        {
          "text-center": alignment === "center",
          "text-left": alignment === "left",
          "text-right": alignment === "right",
          "mx-auto": alignment === "center",
          "ml-0": alignment === "left",
          "mr-0": alignment === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="heading-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
