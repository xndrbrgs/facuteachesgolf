import Image from "next/image";
import AppearText from "../anims/AppearText";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageParallax from "../anims/ImageParallax";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CorpHero = () => {
  const imageOverlay = useRef(null);
  const imageOverlay2 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      [imageOverlay.current, imageOverlay2.current],
      { scaleY: "100%", transformOrigin: "top" },
      {
        scaleY: "0%",
        ease: "0.83, 0, 0.17, 1",
        duration: 1.2,
        stagger: 0.2, // <-- each starts 0.2s after the previous
      }
    );
  }, []);

  return (
    <section className="relative bg-[#f4f4ea] text-black w-full px-[clamp(16px,40px)]">
      <div className="relative size-10 md:size-20  pt-[clamp(16px,40px)]">
        <Image
          src={"/images/svg/FACUCIRCLEBlack.svg"}
          fill
          alt="Facu Logo Large Watermark"
          className="object-contain"
        />
      </div>
      <div className="py-[clamp(16px,48px)]">
        <h1 className="display">
          <AppearText>
            Corporate <br className="md:hidden block" /> Outings
          </AppearText>
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4 pb-[clamp(16px,48px)]">
        <div className="relative h-[clamp(16rem,36rem)] col-span-12 md:col-span-8 overflow-hidden">
          <ImageParallax
            src="/images/FacuEventCorp.webp"
            className="text-white"
          />
          <div
            className="absolute top-0 left-0 bg-[#f4f4ea] z-50 h-full w-full"
            ref={imageOverlay}
          />
        </div>
        <div className="relative h-[clamp(16rem,36rem)] col-span-12 md:col-span-4 overflow-hidden hidden md:block">
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
          <div
            className="absolute top-0 left-0 bg-[#f4f4ea] z-50 h-full w-full"
            ref={imageOverlay2}
          />
        </div>
      </div>
    </section>
  );
};

export default CorpHero;
