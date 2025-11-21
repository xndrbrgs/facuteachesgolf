import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TourGallery = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animate bottom text first
      tl.to("#img1", {
        y: 50,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

        // Animate video next
        .to(
          "#img2",
          {
            y: -100,
            scrollTrigger: {
              trigger: container.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "<"
        )

        // Animate left image after video
        .to(
          "#img3",
          {
            y: -125,
            scrollTrigger: {
              trigger: container.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "<"
        )

        // Animate right image after left image
        .to(
          "#img4",
          {
            y: 50,
            scrollTrigger: {
              trigger: container.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <div className="h-screen sm:h-[200vh] w-full" ref={container}>
      <div className="relative grid grid-cols-12">
        <div className="relative col-start-1 col-end-10 sm:col-end-5 h-[clamp(340px,620px)] z-10">
          <Image
            id="img1"
            src={"/images/LPGA.webp"}
            alt="Facu swing image"
            fill
            className="object-cover img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="relative col-start-4 sm:col-start-7 col-end-13 h-[clamp(160px,620px)] z-20">
          <Image
            id="img2"
            src={"/images/PGA.webp"}
            alt="Facu swing image"
            fill
            className="object-cover img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="relative col-start-2 col-end-10 sm:col-end-6 h-[clamp(180px,620px)] z-40">
          <Image
            id="img3"
            src={"/images/Bend.webp"}
            alt="Facu swing image"
            fill
            className="object-cover img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="relative -top-40 sm:top-0 col-start-7 col-end-12 h-[clamp(160px,620px)] z-30">
          <Image
            id="img4"
            src={"/images/Flag.webp"}
            alt="Facu swing image"
            fill
            className="object-cover img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default TourGallery;
