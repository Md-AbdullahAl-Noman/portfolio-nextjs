import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-center items-center pt-3  w-[100vw] fixed [z-index:100]">
      <nav className="flex p-0.5 gap-1 border border-white/15 rounded-full bg-white/10">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="" className="nav-item">
          Projects
        </a>
        <a href="" className="nav-item">
          About
        </a>
        <a
          href=""
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
