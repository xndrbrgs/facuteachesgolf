"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import TourGallery from "../gallery/TourGallery";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const WhoAmI = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Split text into words
    const split = new SplitText("#span", { type: "words" });

    // Animate each word's opacity with stagger tied to scroll
    gsap.from(split.words, {
      opacity: 0.2,
      color: "#999",
      stagger: {
        each: 0.02,
        ease: "power1.out",
      },
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative w-full">
      <div
        className="relative flex flex-col justify-center my-[clamp(80px,120px)] px-[clamp(16px,40px)] gap-y-4"
        ref={container}
      >
        <h1 className="p text-accent">WHO AM I</h1>
        <div className="pb-[clamp(60px,96px)] flex flex-col gap-y-[clamp(24px,32px)]">
          <span className="h4" id="span">
            Facundo Delapenna is a former professional golfer creating
            world-class golf experiences—drawing on years of inside-the-ropes
            expertise from the PGA Tour, LPGA Tour, and Korn Ferry Tour.
          </span>
          <span className="h4" id="span">
            His instruction combines practical coaching with an understanding of
            how high-level players move, practice, and manage the game.
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
