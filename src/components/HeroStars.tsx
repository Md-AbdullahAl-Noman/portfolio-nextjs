import { PropsWithChildren } from "react";
export const HeroStars = ({
  children,
  size,
  rotation,
  orbitShouldSpin = false,
  orbitSpinDuration,
  starSpinDuration = "10s",
  shouldStarSpin = false, // Add this prop to make the stars
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitSpinDuration?: string;
  orbitShouldSpin?: boolean;
  shouldStarSpin?: boolean;
  starSpinDuration?: string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={orbitShouldSpin ? "animate-spin ":undefined}
        style={{
          animationDuration: orbitSpinDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={shouldStarSpin ? "animate-spin":undefined}
            style={{ animationDuration: starSpinDuration }}
          >
            <div
              className="inline-flex "
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
