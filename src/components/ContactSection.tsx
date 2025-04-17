
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact Me"
          subtitle="Let's get in touch"
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="card-hover border border-primary/20 shadow-lg shadow-primary/5">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-medium text-center">Contact Information</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">Email</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-muted-foreground hover:text-primary text-base font-normal"
                        asChild
                      >
                        <a href="mailto:mattajairajsingh@gmail.com">
                          mattajairajsingh@gmail.com
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">Phone</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-muted-foreground hover:text-primary text-base font-normal"
                        asChild
                      >
                        <a href="tel:+918080062079">
                          +91 8080062079
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-lg">Location</p>
                      <p className="text-muted-foreground">
                        Andheri East, Mumbai 400093
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full" 
                      size="lg"
                      asChild
                    >
                      <a href="mailto:mattajairajsingh@gmail.com">
                        <Mail className="mr-2 h-5 w-5" /> Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
