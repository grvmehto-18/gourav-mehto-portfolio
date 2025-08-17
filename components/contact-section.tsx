"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Send, MessageCircle } from "lucide-react";
import { MotionSection } from "./motion-section";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "grvmehto18@gmail.com",
      href: "mailto:grvmehto18@gmail.com",
      primary: true,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-6264947603",
      href: "tel:+916264947603",
      primary: false,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Indore, India",
      href: null,
      primary: false,
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "grvmehto-18",
      href: "https://github.com/grvmehto-18",
      primary: true,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Gourav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const recipients = "grvmehto18@gmail.com,mehto18g@gmail.com";
    window.open(
      `mailto:${recipients}?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  const quickMessages = [
    "I'd like to discuss a job opportunity",
    "Let's collaborate on a project",
    "I have a question about your work",
    "I'd like to schedule a call",
  ];

  const handleQuickMessage = (message: string) => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Gourav,\n\n${message}\n\nBest regards,`
    );
    const recipients = "grvmehto18@gmail.com,mehto18g@gmail.com";
    window.open(
      `mailto:${recipients}?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <MotionSection id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently seeking full-time opportunities in software
                development. Whether you're a recruiter, fellow developer, or
                someone with an interesting project, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${info.primary ? "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400" : "bg-muted"}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-muted-foreground hover:text-foreground transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <div>
              <h4 className="font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-2">
                {quickMessages.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickMessage(message)}
                    className="w-full justify-start text-left h-auto py-3 px-4">
                    <MessageCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{message}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h4 className="font-semibold text-green-800 dark:text-green-300">
                    Available for Opportunities
                  </h4>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Currently seeking full-time software development positions.
                  Open to remote, hybrid, or on-site roles.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge
                    variant="outline"
                    className="border-green-600 text-green-600 dark:border-green-500 dark:text-green-500">
                    Full-Time
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-green-600 text-green-600 dark:border-green-500 dark:text-green-500">
                    Remote
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-green-600 text-green-600 dark:border-green-500 dark:text-green-500">
                    Java Developer
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-red-600 dark:text-red-500" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white dark:text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    This form will open your email client with the message
                    pre-filled. Your email client will handle sending the
                    message.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">
            Built with Next.js, TypeScript, and Tailwind CSS. Designed and
            developed by Gourav Mehto.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Gourav Mehto. All rights reserved.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
