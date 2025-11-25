"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CounterProps {
  target: number;
  duration?: number;
}

const CounterUp = ({ target, duration = 2 }: CounterProps) => {
  const counterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: duration,
      ease: "power2.out",

      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%", // when the element is 80% into the viewport
        toggleActions: "play none none none",
      },

      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.floor(obj.val).toString();
        }
      },
    });
  }, [target, duration]);
  return <span ref={counterRef}>0</span>;
};

export default CounterUp;
