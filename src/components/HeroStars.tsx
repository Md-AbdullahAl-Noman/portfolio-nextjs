import { PropsWithChildren } from "react";
export const HeroStars = ({
  children,
  size,
  rotation,
  spinShouldOrbit = false,
  orbitSpinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitSpinDuration?: string;
  spinShouldOrbit?: boolean;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={spinShouldOrbit && "animate-spin "}
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
          <div className="animate-spin [animation-duration:10s]">
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
