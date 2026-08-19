"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, CustomEase);

CustomEase.create("heroEase", "0.65, 0, 0.35, 1");

const LandingHero = () => {
  const gradientRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Gradient fades in from nothing
    tl.fromTo(
      gradientRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.9, ease: "heroEase" },
    )

      // 2. Top (eyebrow) text drops in first
      .fromTo(
        eyebrowRef.current,
        { autoAlpha: 0, y: -60 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "heroEase" },
        "-=0.4",
      )

      // 3. Everything else staggers in after that
      .fromTo(
        [headingRef.current, paragraphRef.current],
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "heroEase",
        },
        "-=0.15",
      )

      // 4. Buttons rise up from the bottom last
      .fromTo(
        buttonsRef.current ? buttonsRef.current.children : [],
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "heroEase",
        },
        "-=0.05",
      );
  }, []);

  return (
    <section className="relative h-screen w-full grid grid-cols-12 overflow-hidden px-[clamp(16px,40px)]">
      <div
        ref={gradientRef}
        className="absolute inset-0 gradient pointer-events-none z-0"
      />

      <div className="relative z-10 pt-[clamp(56px,96px)] col-span-12">
        <div className="flex flex-col text-center w-full gap-4">
          <p ref={eyebrowRef} className="uppercase text-accent copy">
            6-Week Online Golf Program
          </p>
          <h1 ref={headingRef} className="display">
            Stop Guessing. <br />
            Start Improving.
          </h1>
          <div className="grid grid-cols-12">
            <div className="w-full col-span-12 md:col-start-4 md:col-end-10">
              <p ref={paragraphRef} className="p">
                A structured golf-improvement system built to help amateur
                golfers practice with purpose, understand their swing, and
                take better golf to the course.
              </p>
            </div>
          </div>
          <div
            ref={buttonsRef}
            className="flex flex-col md:flex-row justify-center gap-4 mt-4 md:mt-0"
          >
            <button className="rounded-full bg-accent text-black px-6 py-3 hover:bg-accent-dark transition hover:cursor-pointer hover:scale-105 font-semibold">
              <p>Start Your Transformation</p>
            </button>
            <button className="rounded-full bg-black text-white border-1 px-6 py-3 hover:bg-accent-dark transition hover:cursor-pointer hover:scale-105 font-semibold">
              <p>See What's Inside</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;