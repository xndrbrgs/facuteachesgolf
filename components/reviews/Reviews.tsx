"use client";

import GoogleReviewsWidget from "google-reviews-widget";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Reviews = () => {
  const reviewsRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(reviewsRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          once: true,
        },
      });
    },
    { scope: reviewsRef }
  );
  return (
    <section className="relative bg-[#f4f4ea] text-black w-full px-[clamp(16px,40px)] pt-[clamp(80px,120px)]">
      <div className="flex flex-col md:flex-row  md:justify-between ">
        <h1 className="h1">Reviews</h1>
        <div className="flex flex-col gap-y-2 pt-4 md:pt-0 text-start md:text-end">
          <p className="p">
            Hear what our
            <br /> students have to say <br /> about their experience
          </p>
        </div>
      </div>
      <div
        className="w-full mt-[clamp(20px,40px)] grid grid-cols-12"
        ref={reviewsRef}
      >
        <div className="relative col-span-12 overflow-hidden bg-white  rounded-2xl p-[clamp(24px,32px)]">
          <div className="relative blur-container z-10">
            <GoogleReviewsWidget instanceId="1x6h7fWePq65zDB3QbWs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
