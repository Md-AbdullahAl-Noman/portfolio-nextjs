"use client";
import { StarCursor } from "@/components/StarCursor";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import ExperienceTimeline from "@/sections/Experience";

import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const updateProgress = () => {
      const timeline = document.querySelector(".timeline-progress");
      if (timeline) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage =
          (scrollTop / (documentHeight - windowHeight)) * 100;
        (timeline as HTMLElement).style.setProperty(
          "--scroll-percentage",
          `${Math.min(Math.max(scrollPercentage, 0), 100)}%`
        );
      }
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="cursor-none">
      <StarCursor />
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <TapeSection />
      <ExperienceTimeline />
      <TestimonialsSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
