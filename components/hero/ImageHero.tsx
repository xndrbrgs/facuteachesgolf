"use client";
import AppearText from "../anims/AppearText";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ImageHero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const leftTextFirst = container.current.querySelector(".left-text-first");
      const rightTextFirst =
        container.current.querySelector(".right-text-first");
      const leftTextSecond =
        container.current.querySelector(".left-text-second");
      const rightTextSecond =
        container.current.querySelector(".right-text-second");

      // Animate left text toward center
      gsap.from(leftTextFirst, {
        x: "-50%", // move toward center
        ease: "none", // linear movement
        scrollTrigger: {
          trigger: container.current,
          start: "top center", // when section enters viewport
          end: "bottom top", // when section leaves viewport
          scrub: true, // ties animation to scroll position
        },
      });

      // Animate right text toward center
      gsap.from(rightTextFirst, {
        x: "50%", // move toward center
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(leftTextSecond, {
        x: "-40%", // move toward center
        ease: "none", // linear movement
        scrollTrigger: {
          trigger: container.current,
          start: "top center", // when section enters viewport
          end: "bottom top", // when section leaves viewport
          scrub: true, // ties animation to scroll position
        },
      });

      // Animate right text toward center
      gsap.from(rightTextSecond, {
        x: "40%", // move toward center
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section className="relative h-[300vh] w-full">
      <div className="fixed top-0 left-0 h-screen w-full brightness-90">
        <video
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          preload="none"
        >
          <source src="/video/Hero.webm" type="video/webm" />
        </video>
      </div>
      <div className="grid grid-cols-12 gap-x-4 w-full px-[clamp(8px,16px)]">
        <div className="col-span-12 text-center mb-8 mt-[clamp(56px,96px)] z-50">
          <div className="display text-white">
            <AppearText>FACU TEACHES GOLF</AppearText>
          </div>
          <p className="p text-white">
            Based in Orlando, FL, Facu Teaches Golf is dedicated to helping{" "}
            <br /> passionate golfers of all skills levels to elevate their
            game.{" "}
          </p>
        </div>
        <div className="relative col-start-6 col-end-8 w-full rounded-xl overflow-hidden hidden md:block md:h-[clamp(200px,460px)] mt-16">
          <video
            width="1080"
            height="1080"
            autoPlay
            muted
            loop
            preload="none"
            className="brightness-75"
          >
            <source src="/video/FacuInv.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="relative h-[200vh] w-full ">
        <div className="grid grid-cols-12 h-screen justify-center items-center px-[clamp(8px,16px)]">
          <div className="col-span-12 col-start-1 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <h2 className="h2 text-white">
              Whether you're a beginner seeking fundamentals or an experienced
              golfer looking to fine-tune your game, my personalized coaching
              focuses on course management, swing mechanics, and mental
              strategy.
            </h2>
          </div>
        </div>

        {/* <div>
            <div>US OPEN QUALIFYING - Sebastian Muñoz</div>
            <div>LPGA - Danielle Kang</div>
          </div> */}

        <div
          ref={container}
          className="absolute bottom-0 left-0 w-full text-white grid grid-cols-12 justify-between items-center uppercase z-50"
        >
          <p className="text-[clamp(8px,12px)] col-span-6 text-end py-4 px-[clamp(8px,16px)] left-text-first bg-black">
            PGA TOUR - Tano Goya
          </p>
          <p className="text-[clamp(8px,12px)] col-span-6 text-start py-4 px-[clamp(8px,16px)] right-text-first bg-black">
            KORN FERRY - Emilio Gonzalez
          </p>
          <p className="text-[clamp(8px,12px)] col-span-6 text-end py-4 px-[clamp(8px,16px)] left-text-second bg-black">
            US OPEN QUALIFYING - Sebastian Muñoz
          </p>
          <p className="text-[clamp(8px,12px)] col-span-6 text-start py-4 px-[clamp(8px,16px)] right-text-second bg-black">
            LPGA - Danielle Kang
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageHero;
