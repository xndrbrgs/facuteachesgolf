"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";

type Option = {
  label: string;
  link: string;
  color?: string; // Tailwind color class (accent dot)
};

interface CircleToListProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  options?: Option[];
  width?: number; // header/list width in px
  headerHeight?: number; // expanded header height in px
  onOpenChange?: (open: boolean) => void;
}

const CircleToListButton: React.FC<CircleToListProps> = ({
  text = "Book Now",
  bgColor = "bg-red-500",
  textColor = "text-white",
  options = [
    {
      label: "30-min Session",
      link: "https://buy.stripe.com/option1",
      color: "bg-black",
    },
    {
      label: "60-min Session",
      link: "https://buy.stripe.com/option2",
      color: "bg-black",
    },
    {
      label: "Virtual Session",
      link: "https://buy.stripe.com/option3",
      color: "bg-black",
    },
    {
      label: "Skillest Session",
      link: "https://buy.stripe.com/option4",
      color: "bg-black",
    },
  ],
  width = 320,
  headerHeight = 56,
  onOpenChange,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Refs for DOM nodes and GSAP timeline
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listWrapperRef = useRef<HTMLDivElement | null>(null);
  const optionRefs = useRef<HTMLAnchorElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Prevent FOUC: hide root until GSAP sets initial styles
  useLayoutEffect(() => {
    if (rootRef.current) {
      gsap.set(rootRef.current, { opacity: 0 });
    }
  }, []);

  // Build GSAP timeline once, using CSS-closed defaults to avoid flash
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      // Initial (closed) state must match CSS classes below
      gsap.set(buttonRef.current, {
        borderRadius: 9999,
        width: 112, // Tailwind w-28
        height: 112, // Tailwind h-28
        clearProps: "scale",
      });
      gsap.set(listWrapperRef.current, {
        height: 0,
        opacity: 0,
        overflow: "hidden",
      });
      gsap.set(optionRefs.current, { y: 8, autoAlpha: 0 });

      // Open animation: circle → rounded header, reveal list, stagger in options
      tl.to(
        buttonRef.current,
        {
          width,
          height: headerHeight,
          borderRadius: 14,
          scale: 0.98,
          duration: 0.35,
          ease: "power2.out",
        },
        0
      )
        .to(
          buttonRef.current,
          { scale: 1, duration: 0.2, ease: "power2.out" },
          0.35
        )
        .to(
          listWrapperRef.current,
          {
            height: "auto",
            opacity: 1,
            duration: 0.45,
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

      // Reveal root after initial GSAP set to avoid flicker
      gsap.set(rootRef.current, { opacity: 1 });
    }, rootRef);

    return () => ctx.revert();
  }, [width, headerHeight]);

  // Play / reverse timeline on expand change
  useEffect(() => {
    if (!tlRef.current) return;
    expanded ? tlRef.current.play() : tlRef.current.reverse();
    onOpenChange?.(expanded);
  }, [expanded, onOpenChange]);

  const handleToggle = () => setExpanded((prev) => !prev);

  // Accessibility: keyboard toggle
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  // Optional: click outside to close
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
    <div ref={rootRef} className="opacity-0 flex items-start justify-center">
      <div className="flex flex-col items-stretch">
        {/* Header Button: starts as circle (CSS), morphs via GSAP */}
        <button
          ref={buttonRef}
          type="button"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={expanded}
          aria-controls="booking-options"
          className={`${bgColor} ${textColor} uppercase font-semibold cursor-pointer  duration-200 shadow-md rounded-full w-28 h-28 flex items-center justify-center  hover:scale-125 transition transform`}
        >
          <span className="pointer-events-none">
            {expanded ? "Choose an option" : text}
          </span>
        </button>

        {/* List Wrapper: CSS defaults keep it closed before GSAP runs */}
        <div
          ref={listWrapperRef}
          id="booking-options"
          className="mt-2 rounded-xl border border-gray-200 shadow-lg bg-white/75 backdrop-blur h-0 opacity-0 overflow-hidden"
          style={{ width }} // sync width with header
        >
          <div className="p-2 flex flex-col gap-2">
            {options.map((opt, i) => (
              <a
                key={opt.label}
                href={opt.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  if (el) optionRefs.current[i] = el;
                }}
                className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors opacity-0 translate-y-2"
              >
                {/* Accent dot */}
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${
                    opt.color ?? "bg-gray-300"
                  }`}
                />
                <span className="text-gray-900 font-medium">{opt.label}</span>
                <span className="ml-auto text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity rotate-45">
                  ↑
                </span>
              </a>
            ))}
          </div>

          {/* Footer with collapse action */}
        </div>
      </div>
    </div>
  );
};

export default CircleToListButton;
