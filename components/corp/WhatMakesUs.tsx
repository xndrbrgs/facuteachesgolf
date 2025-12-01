import ImageParallax from "../anims/ImageParallax";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "next-view-transitions";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhatMakesUs = () => {
  const imageOverlay = useRef(null);
  const imageOverlay2 = useRef(null);
  const imageOverlay3 = useRef(null);
  const imageOverlay4 = useRef(null);
  const image2Container = useRef(null);
  const image3Container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      [imageOverlay.current, imageOverlay2.current, imageOverlay3.current],
      { scaleY: "100%", transformOrigin: "bottom" },
      {
        scaleY: "0%",
        ease: "0.83, 0, 0.17, 1",
        duration: 1.2,
        stagger: 0.2, // <-- each starts 0.2s after the previous
        scrollTrigger: {
          trigger: imageOverlay.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      imageOverlay4.current,
      { scaleY: "100%", transformOrigin: "bottom" },
      {
        scaleY: "0%",
        ease: "0.83, 0, 0.17, 1",
        duration: 1.2,
        scrollTrigger: {
          trigger: imageOverlay4.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      image2Container.current,
      { top: 200 },
      {
        top: 0,
        scrollTrigger: {
          trigger: imageOverlay.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      image3Container.current,
      { top: 400 },
      {
        top: 0,
        scrollTrigger: {
          trigger: imageOverlay.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);
  return (
    <section className="relative bg-[#f4f4ea] text-black w-full px-[clamp(16px,40px)]">
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-12">
          <h1 className="h1 pb-[clamp(16px,48px)] pt-[clamp(64px,120px)]">
            Not just an event — <br /> an authentic golf experience.
          </h1>
        </div>
        <div className="md:col-start-6 md:col-end-11 col-span-12 space-y-4 pb-[clamp(32px,64px)]">
          <h4 className="h4 font-bold">Experience That Sets Us Apart</h4>
          <p className="p">
            Unlike traditional golf agencies, we bring firsthand knowledge from
            the PGA Tour, LPGA Tour, Korn Ferry Tour, and Open Qualifying. Your
            outing isn’t just an event — it’s guided by someone who’s walked
            inside the ropes with the best players in the world.
          </p>
          <p className="p">
            Most agencies outsource instructors and rely on generic formats. We
            deliver hands-on coaching and curated programs led by a golf
            professional with elite tour experience, ensuring every detail
            reflects excellence.
          </p>
        </div>
        <div className="relative col-span-4 h-[clamp(10rem,40rem)] overflow-hidden">
          <ImageParallax src="/images/Corp.webp" className="text-white" />
          <div
            className="absolute top-0 left-0 bg-[#f4f4ea] z-50 h-full w-full"
            ref={imageOverlay}
          />
        </div>
        <div
          className="relative col-span-4 h-[clamp(10rem,40rem)] overflow-hidden"
          ref={image2Container}
        >
          <ImageParallax src="/images/Gifts.webp" className="text-white" />
          <div
            className="absolute top-0 left-0 bg-[#f4f4ea] z-50 h-full w-full"
            ref={imageOverlay2}
          />
        </div>
        <div
          className="relative col-span-4 h-[clamp(10rem,40rem)] overflow-hidden"
          ref={image3Container}
        >
          <ImageParallax src="/images/Carts.webp" className="text-white" />
          <div
            className="absolute top-0 left-0 bg-[#f4f4ea] z-50 h-full w-full"
            ref={imageOverlay3}
          />
        </div>
        <div className="col-span-12">
          <h1 className="h1 pb-[clamp(16px,48px)] pt-[clamp(64px,120px)]">
            More Than Networking — <br /> It’s Performance and Connection
          </h1>
        </div>
        <div className="md:col-start-7 md:col-end-13 col-span-12 space-y-4 pb-[clamp(32px,64px)]">
          <h4 className="h4 font-bold">
            A Personal Touch with Professional Standards
          </h4>
          <p className="p">
            Corporate golf should be more than a day on the course. We create
            outings that foster relationships, improve skills, and showcase your
            brand in a premium, professional setting.
          </p>
        </div>
        <div className="relative col-span-12 mb-[clamp(64px,120px)] overflow-hidden h-[clamp(10rem,40rem)]">
          <ImageParallax
            src="/images/FacuWithGifts.webp"
            className="text-white"
          />
          <div
            className="absolute top-0 left-0 bg-[#f4f4ea] z-50 h-full w-full"
            ref={imageOverlay4}
          />
        </div>
        <div className="col-span-12 text-center mb-[clamp(64px,120px)]">
          <h1 className="h1">Interested in prices?</h1>
          <p className="p py-[clamp(16px,24px)]">
            Contact us today to discuss <br /> your corporate golf event needs
            <br />
            and get a customized quote.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <Link href="/contact">
              <span>Click Here To Inquire</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUs;
