"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

interface PlainCircleProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  link?: string;
  width?: number;
}

const CircleSmall: React.FC<PlainCircleProps> = ({
  text = "Book Now",
  bgColor = "bg-red-500",
  textColor = "text-white",
  link = "https://calendly.com/facudelapenna1/60min",
  width = 90,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.set(rootRef.current, { opacity: 0 });
    gsap.to(rootRef.current, { opacity: 1, duration: 0.5 });
  }, []);

  return (
    <div
      ref={rootRef}
      className="opacity-0 relative flex items-center justify-center"
    >
      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${bgColor} ${textColor} rounded-full size-[clamp(90px,64px)] flex items-center justify-center uppercase font-semibold hover:scale-110 transition font-bandit cursor-pointer`}
        style={{ width, height: width }}
      >
        {text}
      </a>
    </div>
  );
};

export default CircleSmall;
