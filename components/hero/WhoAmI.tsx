import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import TourGallery from "../gallery/TourGallery";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const WhoAmI = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Split text into words
    const split = new SplitText("#span", { type: "words" });

    // Animate each word's opacity with stagger tied to scroll
    gsap.from(split.words, {
      opacity: 0,
      color: "#999",
      y: 20,
      stagger: {
        each: 0.05,
        ease: "power1.out",
      },
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative w-full">
      <div
        className="relative flex flex-col justify-center my-[clamp(80px,120px)]"
        ref={container}
      >
        <h1 className="h1">WHO AM I</h1>
        <div className="py-[clamp(60px,96px)] flex flex-col gap-y-[clamp(24px,32px)]">
          <span className="h4" id="span">
            I help companies and executives create world-class golf
            experiences—drawing on years of inside-the-ropes expertise from the
            PGA Tour, LPGA Tour, and Korn Ferry Tour.
          </span>
          <span className="h4" id="span">
            From tailored golf schools to premium corporate events, I bring the
            precision, strategy, and professionalism of tour-level golf to your
            business gatherings.
          </span>
        </div>
      </div>
      <TourGallery />
    </section>
  );
};

export default WhoAmI;
