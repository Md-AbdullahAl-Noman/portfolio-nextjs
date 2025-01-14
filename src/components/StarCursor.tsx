import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export function StarCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="star-cursor fixed pointer-events-none transition-transform duration-100 ease-out z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        src="/Rocket.gif"
        // className="w-12 h-12"
        alt="Rocket"
        width={140}
        height={140}
        unoptimized
      />
    </div>
  );
}
