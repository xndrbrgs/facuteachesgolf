"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function SmoothScrollLinks() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: target, offsetY: 0 },
        ease: "cubic-bezier(0.83, 0, 0.17, 1)", // <- your custom ease here
      });
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return null;
}