"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Github, Users, Database, Shield } from "lucide-react";
import { MotionSection } from "./motion-section";

export function ProjectsSection() {
  const projects = [
    {
      gitName: "No-Dues",
      name: "No Dues",
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL"],
      date: "Mar 2025",
      description:
        "Full-stack application that automates the student dues clearance process with role-based access control and e-signature workflow. This system significantly reduced clearance time and improved coordination between different departments.",
      features: [
        "Role-based access control for students, faculty, and administrators",
        "Digital e-signature workflow for document verification",
        "Automated dues tracking and clearance status updates",
        "Department coordination dashboard for streamlined processes",
      ],
      icon: <Shield className="h-6 w-6" />,
      category: "Full-Stack Web Application",
      impact:
        "Reduced clearance time by 70% and improved department coordination",
    },
    {
      gitName: "Blood-Link",
      name: "Blood Link",
      technologies: ["Java", "Spring MVC", "Thymeleaf", "MySQL"],
      date: "Nov 2024",
      description:
        "A comprehensive donor-recipient matching platform that connects blood donors with recipients in need. Features advanced search capabilities, user registration system, and responsive design for optimal user experience.",
      features: [
        "Advanced donor-recipient matching algorithm",
        "Comprehensive search and filtering system",
        "User registration and profile management",
        "Responsive frontend built with Thymeleaf, HTML, CSS, and JavaScript",
      ],
      icon: <Users className="h-6 w-6" />,
      category: "Healthcare Platform",
      impact: "Connected 500+ donors with recipients in need",
    },
    {
      gitName: "HospitalManagement",
      name: "Hospital Management System",
      technologies: ["Java", "J2EE", "MySQL"],
      date: "June 2024",
      description:
        "Enterprise-level hospital management system featuring patient management, appointment scheduling, and role-based access control. Successfully digitized manual workflows and reduced administrative overhead.",
      features: [
        "Comprehensive patient management system",
        "Automated appointment scheduling and management",
        "Role-based access control for different user types",
        "Digital workflow automation reducing manual processes",
      ],
      icon: <Database className="h-6 w-6" />,
      category: "Enterprise Application",
      impact: "Digitized workflows, reducing manual processes by 60%",
    },
  ];

  const handleViewProject = (projectName: string) => {
    window.open(`https://github.com/grvmehto-18/${projectName}`, "_blank");
  };

  return (
    <MotionSection id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my full-stack development projects demonstrating
            technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 dark:hover:shadow-primary/10">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-red-600 bg-red-50 dark:bg-red-900/50 dark:text-red-400 p-3 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {project.name}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                      Project Impact:
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-400">{project.impact}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button
                      onClick={() => handleViewProject(project.gitName)}
                      className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white dark:text-white">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                    {/* <Button variant="outline" onClick={() => handleViewProject(project.name)}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20 border-blue-200 dark:border-blue-800/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm constantly working on new projects and exploring emerging
                technologies. Check out my GitHub for the latest updates and
                contributions.
              </p>
              <Button
                onClick={() =>
                  window.open("https://github.com/grvmehto-18", "_blank")
                }
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-900/30">
                <Github className="mr-2 h-4 w-4" />
                Visit My GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
}
