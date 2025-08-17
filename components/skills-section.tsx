import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Server,
  Database,
  Wrench,
  Monitor,
  Terminal,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Java", "JavaScript", "TypeScript", "Rust", "Python", "C++"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        "Spring Boot",
        "Spring Security",
        "RESTful APIs",
        "gRPC",
        "J2EE",
        "Spring MVC",
        "Microservices Architecture",
      ],
      emphasis: true,
    },
    {
      title: "Frontend Development",
      icon: <Monitor className="h-5 w-5" />,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Thymeleaf"],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MariaDB",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "Docker", "Apache Kafka", "Maven", "Gradle", "Postman"],
    },
    {
      title: "Development Environment",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["VS Code", "IntelliJ IDEA", "Vim", "Linux", "Windows"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about backend development with strong expertise in
            building scalable systems. Also proficient in frontend technologies
            to create complete solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`h-full ${
                category.emphasis
                  ? "ring-2 ring-red-600/20 bg-red-50/50 dark:bg-red-950/20"
                  : ""
              }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div
                    className={
                      category.emphasis ? "text-red-700" : "text-red-600"
                    }>
                    {category.icon}
                  </div>
                  {category.title}
                  {category.emphasis && (
                    <Badge
                      variant="secondary"
                      className="ml-auto bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      Passion
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`text-sm ${
                        category.emphasis
                          ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
                          : ""
                      }`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">
            Operating Systems & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Arch Linux",
              "Fedora",
              "Ubuntu",
              "Windows",
              "Linux Administration",
            ].map((os) => (
              <Badge key={os} variant="secondary" className="text-sm px-4 py-2">
                {os}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
