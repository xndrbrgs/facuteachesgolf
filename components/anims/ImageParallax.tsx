"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ImageParallax = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => {
  useGSAP(() => {
    const element = document.querySelectorAll("#image");
    element.forEach((el) => {
      gsap.to(el, {
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <Image
      id="image"
      className={`object-cover z-0 ${className}`}
      fill
      src={src}
      alt="Background image"
    />
  );
};

export default ImageParallax;
