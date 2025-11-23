import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const OneDayClasses = [
  "Full swing analysis (video + drills)",
  "Short-game essentials: chipping, pitching, bunkers",
  "Driver setup & speed fundamentals",
  "On-course strategy session",
  "30-day personalized practice plan",
];

const ThreeDayClasses = [
  "DAY 1: Full swing foundation + irons/wedges",
  "DAY 2: Short-game mastery + putting + 9-hole play",
  "DAY 3: Driver power + course strategy + playing lesson",
  "Long-term improvement plan (6–8 weeks)",
];

const SchoolSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const spans = container.current.querySelectorAll("span");

      gsap.from(spans, {
        opacity: 0.2,
        y: 20,
        stagger: 0.15, // delay between each span
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // when container enters viewport
          end: "bottom bottom", // when container leaves viewport
          scrub: true, // ties animation to scroll
          once: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <section className="relative bg-[#f4f4ea] text-black w-full px-[clamp(16px,40px)] pb-[clamp(80px,120px)]">
      <div className="flex  justify-between items-center ">
        <h1 className="h1">GOLF SCHOOLS</h1>
        <div className="flex flex-col gap-y-2">
          <p className="p uppercase">Choose Your Path to Better Golf</p>
          <span className="copy text-end">
            From a focused one-day boost <br /> to a complete three-day
            transformation
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-4 h-full md:h-[clamp(360px,620px)] my-[clamp(20px,40px)]">
        <div className="rounded-2xl  w-1/3 overflow-hidden">
          <div className="relative h-full brightness-95 z-10">
            <video
              width="1080"
              height="1080"
              autoPlay
              muted
              loop
              preload="none"
              className="brightness-75 object-cover"
            >
              <source src="/video/Rio.m4v" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0  w-full p-[clamp(8px,16px)] ">
              <h3 className="h3 text-white z-20">FACU INVITATIONAL 2025</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-2/3" ref={container}>
          <div className="relative bg-white  rounded-2xl h-1/2 p-[clamp(16px,24px)]">
            <div className="flex flex-col gap-y-5">
              <span className="h3 uppercase">1-Day Golf School</span>
              <div className="flex flex-col gap-y-2">
                {OneDayClasses.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="rounded-full bg-black size-2 inline-block mr-4" />
                    <span className="p">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 size-full">
              <Image
                src={"/images/svg/CardBG.svg"}
                fill
                className="object-cover"
                alt="Background image"
              />
            </div>
          </div>
          <div className=" relative bg-black text-white rounded-2xl h-1/2 p-[clamp(16px,24px)]">
            <div className="flex flex-col gap-y-5">
              <span className="h3 uppercase">3-Day Golf School</span>
              <div className="flex flex-col gap-y-2">
                {ThreeDayClasses.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="rounded-full bg-white size-2 inline-block mr-4" />
                    <span className="p">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 -right-50 size-full">
              <Image
                src={"/images/svg/SecondCardBG.svg"}
                fill
                className="object-cover"
                alt="Background image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolSection;
