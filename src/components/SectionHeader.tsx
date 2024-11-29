import React from "react";

export default function SectionHeader({
  eyeBrowText,
  title,
  description,
}: {
  eyeBrowText: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r  from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyeBrowText}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 max-w-[280px] md:max-w-md mx-auto md:text-lg">
       {description}
      </p>
    </div>
  );
}
