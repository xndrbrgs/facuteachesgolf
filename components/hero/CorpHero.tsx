"use client";

import FacuLogo from "../anims/FacuLogo";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

const CorpHero = () => {
  const bottomText = useRef(null);
  const videoRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate bottom text first
    tl.fromTo(
      bottomText.current,
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }
    )

      // Animate video next
      .fromTo(
        videoRef.current,
        { autoAlpha: 0, scale: 0.5 },
        { autoAlpha: 1, scale: 1, duration: 1, ease: "power3.out" }
      )

      // Animate left image after video
      .fromTo(
        leftImageRef.current,
        { x: 100, autoAlpha: 0 },
        { x: 0, duration: 1.2, autoAlpha: 1, ease: "0.65, 0, 0.35, 1" }
      )

      // Animate right image after left image
      .fromTo(
        rightImageRef.current,
        { x: -100, autoAlpha: 0 },
        { x: 0, duration: 1.2, autoAlpha: 1, ease: "0.65, 0, 0.35, 1" },
        "<"
      );
  }, []);
  return (
    <section className="relative h-screen w-full grid grid-cols-12 overflow-hidden px-[clamp(16px,40px)]">
      <div className="relative pt-[clamp(56px,96px)] col-span-12">
        <div className="relative w-full h-[clamp(64px,256px)] z-70">
          <FacuLogo />
        </div>
      </div>
      <div
        className="absolute top-[clamp(160px, 200px)] md:top-20 left-0 col-start-2 col-end-6 w-full rounded-sm overflow-hidden md:h-[clamp(420px,640px)] invisible z-10"
        ref={leftImageRef}
      >
        <Image
          src={"/images/Hero.webp"}
          alt="Facu swing image"
          fill
          className="object-cover scale-75 brightness-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div
        className="absolute top-40 md:top-20 left-0 col-span-12 md:col-start-5 md:col-end-9 w-full rounded-sm overflow-hidden md:h-[clamp(420px,640px)] z-20 invisible"
        ref={videoRef}
      >
        <video
          width="1080"
          height="1080"
          autoPlay
          playsInline
          controls={false}
          muted
          loop
          preload="metadata"
          className="brightness-75 object-cover"
        >
          <source src="/video/FacuInv.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="absolute top-40 md:top-20 left-0 col-start-8 col-end-12 w-full rounded-sm overflow-hidden md:h-[clamp(420px,640px)] invisible z-10"
        ref={rightImageRef}
      >
        <Image
          src={"/images/FacuSwing.webp"}
          alt="Facu swing image"
          fill
          className="object-cover scale-75 brightness-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 flex text-white justify-between w-full z-40 mb-[clamp(32px,64px)] px-[clamp(16px,40px)]"
        ref={bottomText}
      >
        <div>
          <p className="copy block md:hidden">
            Elevate your brand <br />
            with <span className="text-strongtext">
              world-class
            </span> <br /> golf schools and events.
          </p>
          <p className="p hidden md:block">
            Elevate your brand with <br />{" "}
            <span className="text-strongtext">world-class</span> golf schools{" "}
            <br /> and events.
          </p>
        </div>
        <div className="text-right">
          <p className="copy block md:hidden">
            Ideal for organizations <br />
            aiming to <span className="text-strongtext">inspire</span>, <br />{" "}
            <span className="text-strongtext">connect</span>, and{" "}
            <span className="text-strongtext">lead</span>.
          </p>
          <p className="p hidden md:block">
            Ideal for organizations <br />
            aiming to <span className="text-strongtext">inspire</span>, <br />{" "}
            <span className="text-strongtext">connect</span>, and{" "}
            <span className="text-strongtext">lead</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CorpHero;
