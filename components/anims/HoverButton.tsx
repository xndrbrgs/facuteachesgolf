"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface HoverTextButtonProps {
  /** The text shown in the button */
  text: string;
  /** Link target */
  href: string;
  /** Optional extra classes for the outer <button> */
  className?: string;
  /** Animation duration in seconds (default 0.45) */
  duration?: number;
  /** Optional custom ease (default "power3.inOut") */
  ease?: string;
}

export default function HoverTextButton({
  text,
  href,
  className = "",
  duration = 0.45,
  ease = "power3.inOut",
}: HoverTextButtonProps) {
  const topTextRef = useRef<HTMLSpanElement>(null);
  const bottomTextRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);

  // Measure the actual rendered height of the text (not the font's em box,
  // which usually includes extra space above/below the glyphs). Using this
  // exact pixel value as the mask height removes the residual gap.
  useLayoutEffect(() => {
    if (topTextRef.current) {
      setTextHeight(topTextRef.current.getBoundingClientRect().height);
    }
  }, [text]);

  useEffect(() => {
    // Build a paused timeline once. play() runs it forward on hover,
    // reverse() plays it backward on hover-out so it always reverts cleanly
    // even if the user hovers/unhovers mid-animation.
    const ctx = gsap.context(() => {
      tlRef.current = gsap
        .timeline({ paused: true })
        .to(
          topTextRef.current,
          { yPercent: -100, duration, ease },
          0
        )
        .to(
          bottomTextRef.current,
          { yPercent: -100, duration, ease },
          0
        );
    });

    return () => ctx.revert();
  }, [duration, ease]);

  const handleEnter = () => tlRef.current?.play();
  const handleLeave = () => tlRef.current?.reverse();

  return (
    <button
      className={`mt-[clamp(24px,48px)] bg-accent text-black py-2 px-4 rounded-full ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a
        href={href}
        className="relative inline-block overflow-hidden uppercase leading-none align-top"
        style={{ height: textHeight ?? "auto" }}
      >
        {/* original text: sits in place, animates up and out on hover */}
        <span ref={topTextRef} className="block leading-none">
          {text}
        </span>

        {/* duplicate text: starts stacked directly below, animates up into place */}
        <span
          ref={bottomTextRef}
          className="absolute left-0 top-full block leading-none"
          aria-hidden="true"
        >
          {text}
        </span>
      </a>
    </button>
  );
}