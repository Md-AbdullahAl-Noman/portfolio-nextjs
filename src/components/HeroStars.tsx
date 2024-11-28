import { PropsWithChildren } from "react";
export const HeroStars = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number , rotation: number}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className=""
        style={{ width: `${size}px`, height: `${size}px` ,transform: `rotate(${rotation}deg)`}}
      >
        <div className="inline-flex "
        style={{transform: `rotate(${rotation*-1}deg)`}}>
          {children}
        </div>
      </div>
    </div>
  );
};
