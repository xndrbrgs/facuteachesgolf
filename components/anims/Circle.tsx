"use client";

import React from "react";

interface CircleButtonProps {
  text?: string;
  size?: string; // Tailwind size classes like w-48 h-48
  bgColor?: string;
  textColor?: string;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  text,
  size = "w-48 h-48",
  bgColor = "bg-black",
  textColor = "text-white",
}) => {
  return (
    <a
      href="https://buy.stripe.com/7sYfZh1llaFme4v7JOew809"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`${size} ${bgColor} ${textColor} rounded-full flex items-center justify-center uppercase cursor-pointer hover:scale-125 transition transform duration-300 p animate-[spin_8s_ease-in-out_infinite]`}
      >
        {text}
      </div>
    </a>
  );
};

export default CircleButton;
