
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const educationData = [
    {
      degree: "BSc Information Technology",
      institution: "Tolani College of Commerce",
      duration: "2022 - 2025",
      description: "Currently pursuing a Bachelor's degree in Information Technology with a focus on software development and data analytics."
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Tolani College of Commerce",
      duration: "2020 - 2022",
      description: "Completed higher secondary education with a focus on science and mathematics."
    }
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Time Management",
    "Problem Solving",
    "Creativity",
    "Adaptability"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Me" 
            subtitle="Learn more about my background and skills"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src="fuploads/da676bdd-37f1-43ce-a44b-9c34473287ec.png"
                    alt="Jairaj Singh Matta"
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <h3 className="text-lg font-medium">Languages</h3>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Punjabi</li>
                        <li>Marathi</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <h3 className="text-lg font-medium">Soft Skills</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {softSkills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="prose dark:prose-invert max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">Hi there, I'm Jairaj!</h2>
                <p className="text-lg">
                  I'm a detail-oriented BSc IT student with a passion for technology and a strong foundation in software development. Currently pursuing my Bachelor's degree at Tolani College of Commerce, I am dedicated to expanding my knowledge and skills in the field of Information Technology.
                </p>
                <p className="text-lg">
                  My journey in technology began with a curiosity about how digital systems work, which led me to explore various programming languages and tools. I'm particularly interested in web development and data analytics, and I enjoy creating projects that solve real-world problems.
                </p>
                <p className="text-lg">
                  I'm seeking an entry-level position where I can leverage my technical skills and contribute to innovative projects while continuing to learn and grow in the field of IT.
                </p>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-6">
                  {educationData.map((item, index) => (
                    <Card key={index} className="overflow-hidden card-hover">
                      <div className="border-l-4 border-primary p-4 flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <p className="text-muted-foreground">{item.institution}</p>
                          <p className="text-sm text-muted-foreground">{item.duration}</p>
                        </div>
                        <p className="mt-2">{item.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Career Goals</h2>
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <p className="text-lg">
                      My immediate career goal is to secure an entry-level IT role focused on software and data-driven projects. I aim to contribute to meaningful work while developing my skills in software development, web technologies, and data analytics.
                    </p>
                    <p className="text-lg mt-4">
                      Long-term, I aspire to grow into a role where I can lead technology initiatives and mentor others. I'm committed to continuous learning and staying updated with the latest technologies and best practices in the field.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
