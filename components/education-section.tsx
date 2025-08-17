import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Award, BadgeIcon as Certificate, Trophy } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      institution: "IPS Academy, Institute of Engineering & Science",
      degree: "B.Tech in Computer Science & Information Technology",
      date: "2022 – 2026",
      location: "Indore, India",
      status: "Current",
      description:
        "Pursuing a B.Tech in Computer Science.",
      highlights: ["Software Engineering", "Data Structures & Algorithms", "Web Development", "Database Management"],
    },
    {
      institution: "Sanskar Valley Public Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC) & Secondary School Certificate (SSC)",
      date: "2019 – 2021",
      location: "Karahi, India",
      status: "Completed",
      description: "Completed secondary education with exceptional academic performance in Science stream.",
      highlights: ["Class XII: 90% (2021)", "Class X: 92.4% (2019)", "Science Stream", "Mathematics & Physics"],
    },
  ]

  const certifications = [
    {
      title: "Spring Boot RESTful Web Services",
      provider: "Forage",
      date: "Aug 2025",
      type: "Professional Simulation",
      description: "Completed HPE software engineering simulation focusing on RESTful API development",
    },
    {
      title: "Spring Boot Microservices Professional eCommerce Masterclass",
      provider: "Udemy",
      date: "2024–25",
      type: "Professional Course",
      description: "Comprehensive course on microservices architecture and eCommerce development",
    },
    {
      title: "PostgreSQL Database Management",
      provider: "IIT Bombay",
      date: "2024",
      type: "Academic Certification",
      description: "Advanced database management and optimization techniques",
    },
    {
      title: "Programming Languages Certification",
      provider: "Sololearn",
      date: "2023–24",
      type: "Multiple Certifications",
      description: "Java, C++, JavaScript, and SQL programming certifications",
    },
    {
      title: "Web Development Fundamentals",
      provider: "KG Coding",
      date: "2024",
      type: "Web Development",
      description: "HTML5 and CSS3 fundamentals and advanced techniques",
    },
  ]

  const honorsAwards = [
    {
      title: "Minor Project Udaan-2025 Phase I",
      achievement: "1st Position",
      date: "2025",
      description: "First place in college level competition UDAAN2025 PHASE I",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      title: "Pratibha Samman",
      achievement: "Top 3 in City",
      date: "2020",
      description: "Ranked among the top 3 in the city for 10th grade academic performance",
      icon: <Award className="h-5 w-5" />,
    },
  ]

  const getStatusColor = (status: string) => {
    return status === "Current"
      ? "bg-green-100 text-green-800 border-green-200"
      : "bg-blue-100 text-blue-800 border-blue-200"
  }

  const getCertificationType = (type: string) => {
    const colors = {
      "Professional Simulation": "bg-red-100 text-red-800 border-red-200",
      "Professional Course": "bg-blue-100 text-blue-800 border-blue-200",
      "Academic Certification": "bg-green-100 text-green-800 border-green-200",
      "Multiple Certifications": "bg-purple-100 text-purple-800 border-purple-200",
      "Web Development": "bg-orange-100 text-orange-800 border-orange-200",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey, professional certifications, and recognition for excellence
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-red-600" />
            Academic Background
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="relative">
                <div className="absolute left-0 top-6 w-1 h-16 bg-red-600 rounded-full" />
                <CardHeader className="pl-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(edu.status)} variant="outline">
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pl-8">
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Certificate className="h-6 w-6 text-blue-600" />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                    <Badge className={getCertificationType(cert.type)} variant="outline">
                      {cert.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">{cert.provider}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-yellow-600" />
            Honors & Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {honorsAwards.map((award, index) => (
              <Card key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-yellow-600 bg-yellow-100 p-2 rounded-lg">{award.icon}</div>
                    <div>
                      <CardTitle className="text-lg mb-1">{award.title}</CardTitle>
                      <p className="text-yellow-700 font-semibold">{award.achievement}</p>
                      <p className="text-sm text-muted-foreground">{award.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
