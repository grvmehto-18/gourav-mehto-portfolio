import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gourav Mehto - Software Developer",
  description:
    "Full-stack developer specializing in Java, Spring Boot, React, and modern web technologies. View my portfolio, projects, and experience.",
  generator: "v0.app",
  keywords:
    "Gourav Mehto, Software Developer, Java, Spring Boot, React, Full Stack Developer, Portfolio",
  authors: [{ name: "Gourav Mehto" }],
  openGraph: {
    title: "Gourav Mehto - Software Developer",
    description:
      "Full-stack developer specializing in Java, Spring Boot, React, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
