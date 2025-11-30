"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppearText from "../anims/AppearText";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ClassHero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const displayRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      // Use a timeline so we can scrub the animation with scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // when section hits top of viewport
          end: "+=150%", // one viewport height of scroll
          scrub: 0.5, // smooth scrubbing
          pin: true, // pin the section during the scroll
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      // Animate from centered square -> full screen
      tl.fromTo(
        wrapperRef.current,
        {
          width: "clamp(300px, 40vw, 600px)",
          height: "clamp(300px, 40vw, 600px)",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0rem",
          left: 0,
          top: 0,
          xPercent: 0,
          yPercent: 0,
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-background overflow-hidden"
    >
      <div ref={wrapperRef} className="absolute will-change-transform">
        <video
          width={1080}
          height={1080}
          autoPlay
          playsInline
          muted
          loop
          preload="metadata"
          className="w-full h-full object-cover brightness-75"
        >
          <source src="/video/Playing.webm" type="video/webm" />
        </video>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="display">
          <AppearText>CLASSES</AppearText>
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-full px-[clamp(16px,40px)] pt-[clamp(16px,24px)]">
        <div className="relative size-10 md:size-20">
          <Image
            src="/images/svg/FACUCIRCLE.svg"
            fill
            alt="Facu Logo"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassHero;
