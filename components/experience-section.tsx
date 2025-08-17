import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { MotionSection } from "./motion-section"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineering Job Simulation",
      company: "Hewlett Packard Enterprise (Forage)",
      location: "Virtual",
      date: "Aug 2025",
      type: "Simulation",
      details: [
        "Proposed a RESTful service for managing employees with comprehensive API design",
        "Built Java Spring Boot application supporting HTTP requests and JSON upload functionality",
        "Created comprehensive unit tests to validate application performance and reliability",
        "Implemented best practices for enterprise-level software development",
      ],
      technologies: ["Java", "Spring Boot", "RESTful APIs", "Unit Testing", "JSON"],
    },
    {
      title: "Intern - Java Developer",
      company: "Ypsilon IT Solutions",
      location: "Indore, India",
      date: "May 2024 – Jul 2024",
      type: "Internship",
      details: [
        "Contributed to backend development and debugging in Java-based enterprise projects",
        "Collaborated with cross-functional teams to ensure efficient project delivery",
        "Gained hands-on experience with production-level Java applications",
        "Participated in code reviews and learned industry best practices",
      ],
      technologies: ["Java", "Backend Development", "Debugging", "Team Collaboration"],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800/50"
      case "Simulation":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800/50"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/50 dark:text-gray-300 dark:border-gray-800/50"
    }
  }

  return (
    <MotionSection id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development through internships and professional simulations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative">
              {/* Timeline indicator */}
              <div className="absolute left-0 top-6 w-1 h-16 bg-red-600 dark:bg-red-500 rounded-full" />

              <CardHeader className="pl-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getTypeColor(exp.type)} variant="outline">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pl-8">
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20 border-red-200 dark:border-red-800/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Looking for New Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                I'm actively seeking full-time software development positions where I can contribute my skills and
                continue growing as a developer.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-red-600 text-red-600 dark:border-red-500 dark:text-red-500">
                  Full-Stack Development
                </Badge>
                <Badge variant="outline" className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
                  Backend Engineering
                </Badge>
                <Badge variant="outline" className="border-green-600 text-green-600 dark:border-green-500 dark:text-green-500">
                  Java Development
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  )
}
