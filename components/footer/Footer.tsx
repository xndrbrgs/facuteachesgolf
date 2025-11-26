"use client";

import Link from "next/link";
import FacuLogo from "../anims/FacuLogo";
import Underline from "../anims/Underline";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const spans = footerRef.current.querySelectorAll("span");

      gsap.from(spans, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 40%",
          end: "bottom bottom",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: {
          each: 0.02,
          ease: "power3.out",
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer className="relative bg-[#f4f4ea] overflow-hidden" ref={footerRef}>
      <div className="relative grid grid-cols-12 bg-background rounded-t-4xl px-[clamp(16px,40px)]">
        <div className="col-span-12 md:col-span-6 pt-[clamp(36px,80px)]">
          <div className="relative size-15 md:size-30">
            <Image
              src="/images/svg/FACUCIRCLE.svg"
              alt="FacuLogo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 pt-[clamp(24px,80px)]">
          <div className="flex flex-col uppercase gap-y-2">
            <p className="p text-strongtext">MENU</p>
            <span className="p cursor-pointer">
              <Underline
                bg="bg-white"
                href="https://calendly.com/facudelapenna1/60min"
              >
                book a lesson
              </Underline>
            </span>
            <span className="p cursor-pointer">
              <Underline bg="bg-white" href="services">
                classes
              </Underline>
            </span>
            <span className="p cursor-pointer">
              <Underline bg="bg-white" href="my-story">
                my story
              </Underline>
            </span>
            <span className="p cursor-pointer">
              <Underline bg="bg-white" href="contact">
                contact
              </Underline>
            </span>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 pt-[clamp(24px,80px)]">
          <div className="flex flex-col uppercase gap-y-2">
            <p className="p text-strongtext">SOCIALS</p>
            <span className="p cursor-pointer">
              <Underline
                bg="bg-white"
                href="https://www.instagram.com/facuteachesgolf/"
              >
                Instagram
              </Underline>
            </span>
            <span className="p cursor-pointer">
              <Underline
                bg="bg-white"
                href="https://share.google/6EmaBHn6kJwg9xgDL"
              >
                Google
              </Underline>
            </span>
            <span className="p cursor-pointer">
              <Underline
                bg="bg-white"
                href="https://www.facebook.com/facu.delapenna"
              >
                Facebook
              </Underline>
            </span>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2 text-end pt-[clamp(24px,80px)]">
          <div className="flex flex-col uppercase gap-y-2">
            <p className="p text-strongtext">CONTACT</p>
            <span className="p">407 813 3044</span>
          </div>
        </div>
        <div className="col-span-12 pb-2 mt-[clamp(120px,180px)]">
          <div className="relative w-full h-[clamp(64px,256px)] z-70">
            <FacuLogo />
          </div>
        </div>
        <div className="col-span-12 pb-6 pt-2 md:pt-0">
          <div className="flex md:flex-row flex-col w-full justify-between">
            <p className="copy">
              Copyright © {new Date().getFullYear()} Facu Teaches Golf | All
              rights reserved
            </p>
            <span className="copy">
              Created by{" "}
              <Link href="https://www.maxjoy.studio/">Maxjoy Studio</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
