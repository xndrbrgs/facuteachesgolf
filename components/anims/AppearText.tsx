"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText, CustomEase);

const AppearText = ({ children }: { children: ReactNode }) => {
  CustomEase.create("smooth", "0.83, 0, 0.17, 1");
  const spanText = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    let split = SplitText.create("#stagger-link-text", {
      type: "words, chars",
    });

    gsap.from(split.words, {
      duration: 1,
      y: 150,
      stagger: 0.15,
      ease: "smooth",
    });
  });
  return (
    <div className="overflow-hidden" id="stagger-link">
      <span ref={spanText} id="stagger-link-text" className="shadow-text">
        {children}
      </span>
    </div>
  );
};

export default AppearText;
