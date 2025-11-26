"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";

type Option = {
  label: string;
  link: string;
  color?: string;
};

interface CircleToListProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  options?: Option[];
  width?: number;
  headerHeight?: number;
  onOpenChange?: (open: boolean) => void;
}

const CircleToListButton: React.FC<CircleToListProps> = ({
  text = "Book Now",
  bgColor = "bg-red-500",
  textColor = "text-white",
  options = [
    {
      label: "1-Hour Session",
      link: "https://calendly.com/facudelapenna1/60min",
      color: "bg-black",
    },
    {
      label: "Corporate Event",
      link: "https://buy.stripe.com/option2",
      color: "bg-black",
    },
    {
      label: "1-Day Program",
      link: "https://buy.stripe.com/option2",
      color: "bg-black",
    },
    {
      label: "3-Day Program",
      link: "https://buy.stripe.com/option3",
      color: "bg-black",
    },
    {
      label: "Skillest Session",
      link: "https://skillest.com/@facuteachesgolf",
      color: "bg-black",
    },
  ],
  width = 240,
  headerHeight = 56,
  onOpenChange,
}) => {
  const [expanded, setExpanded] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listWrapperRef = useRef<HTMLDivElement | null>(null);
  const optionRefs = useRef<HTMLAnchorElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    gsap.set(rootRef.current, { opacity: 0 });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      gsap.set(buttonRef.current, {
        borderRadius: 9999,
        width: 112,
        height: 112,
      });
      gsap.set(listWrapperRef.current, {
        opacity: 0,
        overflow: "hidden",
      });
      gsap.set(optionRefs.current, { y: -8, autoAlpha: 0 }); // animate upward

      tl.to(buttonRef.current, {
        width,
        height: headerHeight,
        borderRadius: 14,
        duration: 0.35,
        ease: "power2.out",
      })
        .to(
          listWrapperRef.current,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.15
        )
        .to(
          optionRefs.current,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.35,
            stagger: 0.06,
            ease: "power2.out",
          },
          "<+=0.1"
        );

      tlRef.current = tl;
      gsap.set(rootRef.current, { opacity: 1 });
    }, rootRef);

    return () => ctx.revert();
  }, [width, headerHeight]);

  useEffect(() => {
    if (!tlRef.current) return;
    expanded ? tlRef.current.play() : tlRef.current.reverse();
    onOpenChange?.(expanded);
  }, [expanded, onOpenChange]);

  const handleToggle = () => setExpanded((prev) => !prev);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (expanded && !rootRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [expanded]);

  return (
    <div
      ref={rootRef}
      className="opacity-0 relative flex items-center justify-center"
    >
      {/* Button */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className={`${bgColor} ${textColor} rounded-full size-[clamp(120px,128px)] flex items-center justify-center uppercase font-semibold hover:scale-110 transition copy cursor-pointer`}
      >
        {expanded ? "Choose an option" : text}
      </button>

      {/* Options positioned above and left */}
      <div
        ref={listWrapperRef}
        className="absolute bottom-full left-0 mb-2 bg-white/65 backdrop-blur rounded-xl  shadow-lg p-2"
        style={{ width }}
      >
        <div className="flex flex-col gap-2">
          {options.map((opt, i) => (
            <a
              key={opt.label}
              href={opt.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => el && (optionRefs.current[i] = el)}
              className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition transform duration-100 opacity-0 translate-y-2"
            >
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${opt.color}`}
              />
              <span className="text-gray-900 font-medium">{opt.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircleToListButton;
