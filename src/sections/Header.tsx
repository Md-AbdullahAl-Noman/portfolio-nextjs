"use client";
import React, { useState } from "react";

export const Header = () => {
  const [selected, setSelected] = useState("home");
  const handleNavClick = (section: string) => {
    setSelected(section);
  };
  return (
    <div className="flex justify-center items-center pt-3  w-[100vw] fixed [z-index:100] backdrop:blur-xl">
      <nav className="flex p-0.5 gap-1 border border-white/15 rounded-full bg-white/10">
        <a
          href="#home"
          className={`nav-item ${
            selected === "home"
              ? "bg-white text-gray-900 animate-pulse duration-1000"
              : ""
          }`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${
            selected === "projects"
              ? "bg-white text-gray-900 animate-pulse duration-1000"
              : ""
          }`}
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${
            selected === "about"
              ? "bg-white text-gray-900 animate-pulse duration-1000"
              : ""
          }`}
          onClick={() => handleNavClick("about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${
            selected === "contact"
              ? "bg-white text-gray-900 animate-pulse duration-1000"
              : ""
          }`}
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
