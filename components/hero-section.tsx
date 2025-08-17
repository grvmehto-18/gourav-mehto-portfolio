"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Phone, Download, ArrowDown } from "lucide-react"

export function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    // This would typically link to a PDF resume
    window.open("mailto:mehto18g@gmail.com?subject=Resume Request", "_blank")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Main heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gourav Mehto
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer specializing in{" "}
              <span className="text-foreground font-semibold">Java Spring Boot</span> and{" "}
              <span className="text-foreground font-semibold">React</span>
            </p>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto">
            {["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Docker"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs sm:text-sm px-2 sm:px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Computer Science student at IPS Academy with hands-on experience in full-stack development. I build scalable
            web applications with modern technologies and have a passion for creating efficient, user-friendly
            solutions.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              onClick={handleContactClick}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button onClick={handleDownloadCV} variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Contact links */}
          <div className="flex justify-center space-x-8 pt-2">
            <a
              href="https://github.com/grvmehto-18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:mehto18g@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="tel:+916264947603"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-4 sm:pt-8">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
