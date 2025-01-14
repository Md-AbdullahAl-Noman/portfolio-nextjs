import React, { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "Senior Software Engineer",
    description:
      "Led multiple successful projects and mentored junior developers",
    icon: "/business-development.gif",
  },
  {
    year: "2024",
    title: "Junior Software Engineer",
    description:
      "Contributed to a successful project and learned new technologies",
    icon: "/target.gif",
  },
  {
    year: "2024",
    title: "Internship",
    description: "Worked as a software developer intern",
    icon: "/trophy.gif",
  },
];

const ExperienceTimeline = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-active");
          }
        });
      },
      {
        threshold: 1,
      }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyeBrowText="Experiences" title="My Journey" />
        <div className="relative mt-12" ref={timelineRef}>
          {/* Timeline line with progress */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700">
            <div className="timeline-progress"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-16 ">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={` timeline-item relative opacity-0 transition-all duration-1000 ease-out ${
                  index % 2 === 0 ? "left-item" : "right-item"
                }`}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-gray-800 m-4 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <span className="text-emerald-400 font-semibold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className=" rounded-full p-2 shadow-lg">
                      {item.icon && (
                        <Image
                          src={item.icon}
                          alt={item.title}
                          className=" mb-4 bg-transparent rounded-full"
                          width={42}
                          height={42}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
