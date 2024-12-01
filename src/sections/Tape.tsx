import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Responsive",
  "Scaleable",
  "Fast",
  "Modern",
  "User Friendly",
  "SEO Friendly",
  "Cross Platform",
  "Reliable",
];
export const TapeSection = () => {
  return (
    <div className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex-none gap-2 py-3 animate-move-left-animation [animation-duration:30s]">
            {[...new Array(2).fill(0)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => {
                  return (
                    <div key={word} className="inline-flex gap-2 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm px-4">
                        {word}
                      </span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12 " />
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
