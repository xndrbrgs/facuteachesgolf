import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VideoSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const spans = container.current.querySelectorAll("span");

      gsap.from(spans, {
        opacity: 0.1,
        y: 40,
        stagger: 0.95, // delay between each span
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 20%", // when container enters viewport
          end: "bottom bottom", // when container leaves viewport
          scrub: true, // ties animation to scroll
          once: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <section className="relative h-screen w-full">
      <div className="absolute top-0 left-0 size-full z-0">
        <video
          width="1080"
          height="1080"
          autoPlay
          muted
          loop
          preload="none"
          className="brightness-75 object-cover size-full"
        >
          <source src="/video/Hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="relative flex h-screen justify-center text-center items-center z-10"
        ref={container}
      >
        <div className="h1 flex flex-col ">
          <span>We elevate the game –</span>
          <span>guided by experience,</span>
          <span>powered by precision.</span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
