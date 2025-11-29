"use client";

import CounterUp from "../CounterUp";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const imageRef = useRef(null);
  const imageOverlay = useRef(null);
  const blackOverlay = useRef(null);
  const textRef = useRef(null);

  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  useGSAP(() => {
    const mainTl = gsap.timeline({
      onComplete: () => {
        onComplete(); // Show homepage content after animation finishes
      },
    });

    // Main animations (text + overlay)
    mainTl.fromTo(
      textRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        autoAlpha: 1,
        y: 0,
        ease: "0.83, 0, 0.17, 1",
        duration: 0.7,
      }
    );
    mainTl.fromTo(
      imageOverlay.current,
      { scaleY: "100%", transformOrigin: "top" },
      { scaleY: "0%", ease: "0.83, 0, 0.17, 1", duration: 1.5 }
    );

    // Create a separate looping timeline for images
    const imageTl = gsap.timeline({ repeat: -1 }); // infinite loop

    imageTl.to(img1.current, { autoAlpha: 1, zIndex: 1, duration: 0.6 });
    imageTl.to(img2.current, { autoAlpha: 1, zIndex: 2, duration: 0.6 });
    imageTl.to(img3.current, { autoAlpha: 1, zIndex: 3, duration: 0.6 });
    imageTl.to(img4.current, { autoAlpha: 1, zIndex: 4, duration: 0.6 });

    // Optionally fade them back out before looping
    imageTl.to([img1.current, img2.current, img3.current, img4.current], {
      autoAlpha: 0,
      duration: 0.1,
      stagger: 0.1,
    });

    // Sync image loop with main timeline start
    mainTl.add(imageTl, "<"); // start looping images when overlay starts
    mainTl.fromTo(
      imageOverlay.current,
      { scaleY: "0%", transformOrigin: "bottom" },
      { scaleY: "100%", ease: "0.83, 0, 0.17, 1", duration: 1.5 }
    );
    mainTl.fromTo(
      textRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -20, ease: "0.83, 0, 0.17, 1", duration: 0.7 },
      ">"
    );

    mainTl.fromTo(
      blackOverlay.current,
      { scaleY: 0, transformOrigin: "bottom" },
      { scaleY: 1, ease: "0.83, 0, 0.17, 1", duration: 1.2 }
    );

    mainTl.kill();
  }, []);

  return (
    <section className="h-screen w-full fixed top-0 left-0 z-[999] bg-[#ecece9]">
      {/* Overlay that grows from bottom → top */}
      <div
        ref={blackOverlay}
        className="absolute inset-0 bg-[#111111] z-[100] will-change-transform"
        style={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
      />

      <div className="relative grid grid-cols-12 h-full items-center justify-center">
        <div className="col-start-6 col-end-8">
          <div
            className="flex justify-between w-full mb-2 invisible text-black"
            ref={textRef}
          >
            <p className="copy uppercase font-bold">Facu Teaches Golf</p>
            <p className="copy uppercase font-bold">
              <CounterUp target={100} duration={5} />
            </p>
          </div>
          <div
            className="relative flex flex-col items-center justify-center h-[40vh]"
            ref={imageRef}
          >
            <img
              src={"/images/Flag.webp"}
              alt={`Loader Image Final`}
              className="absolute top-0 left-0 w-full h-full object-cover invisible"
              ref={img1}
            />
            <img
              src={"/images/FacuSwing.webp"}
              alt={`Loader Image Final`}
              className="absolute top-0 left-0 w-full h-full object-cover invisible"
              ref={img2}
            />
            <img
              src={"/images/Bend.webp"}
              alt={`Loader Image Final`}
              className="absolute top-0 left-0 w-full h-full object-cover invisible"
              ref={img3}
            />
            <img
              src={"/images/Students.webp"}
              alt={`Loader Image Final`}
              className="absolute top-0 left-0 w-full h-full object-cover invisible"
              ref={img4}
            />

            <div
              className="absolute top-0 left-0 bg-[#ecece9] z-50 h-full w-full"
              ref={imageOverlay}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
