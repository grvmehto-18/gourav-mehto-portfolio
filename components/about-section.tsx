import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Globe } from "lucide-react"
import { MotionSection } from "./motion-section"

export function AboutSection() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "React.js, TypeScript, HTML5, CSS3 with modern UI/UX practices",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Java, Spring Boot, Spring Security, RESTful APIs, gRPC",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Management",
      description: "MySQL, MariaDB, PostgreSQL with efficient query optimization",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Full-Stack Integration",
      description: "End-to-end application development with modern DevOps practices",
    },
  ]

  return (
    <MotionSection id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Personal info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Computer Science student at IPS Academy, Institute of Engineering & Science, currently in my
                  final year (2022-2026). My journey in software development began with a curiosity about how
                  applications work behind the scenes.
                </p>
                <p>
                  Through hands-on projects and internships, I've developed expertise in full-stack development,
                  particularly with Java Spring Boot for backend services and React for frontend applications. I enjoy
                  solving complex problems and building scalable solutions.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working
                  on personal projects that challenge my skills and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Skills highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">What I Do</h3>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-red-600 dark:border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-red-600 dark:text-red-500 flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-3">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["Microservices", "Android Development", "Block Chain", "Artificial Intelligence & Machine Learning"].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
