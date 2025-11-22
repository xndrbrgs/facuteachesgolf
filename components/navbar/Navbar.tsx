"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { CustomEase } from "gsap/CustomEase";
import { useRef } from "react";
import Underline from "../anims/Underline";

gsap.registerPlugin(useGSAP, CustomEase);

const Navbar = () => {
  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };
  const container = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | any>();

  CustomEase.create("smooth", "0.83, 0, 0.17, 1");

  useGSAP(
    () => {
      const menu = gsap.utils.toArray(".menu");
      const menuText = document.querySelector(".menu-text");

      tl.current = gsap
        .timeline({
          onComplete: () => {
            // Set z-index of "MENU" text to 0 after animation
            if (menuText) {
              menuText.style.zIndex = "0";
            }
          },
          onReverseComplete: () => {
            // Reset z-index of "MENU" text when animation reverses
            if (menuText) {
              menuText.style.zIndex = "10";
            }
          },
        })
        .from(menu, { x: 600, ease: "smooth", duration: 0.75, autoAlpha: 0 })
        .reverse();
    },
    { scope: container }
  );
  return (
    <nav className="fixed top-0 left-0 z-90 flex justify-between p-[clamp(16px,40px)] bg-transparent w-full">
      <p className="font-bandit p uppercase text-white">FTG</p>
      <div className="relative z-90" ref={container}>
        <div className="absolute top-0 right-0 menu border rounded-2xl w-[360px] md:w-[520px] h-[90vh] p-8 bg-white z-20">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="h3">[ MENU ]</h3>
                <div
                  onClick={toggleTimeline}
                  className="relative cursor-pointer bg-black p-2 rounded-md hover:scale-105 hover:bg-black/80 transition transform duration-150"
                >
                  <Image
                    src={"/images/svg/x.svg"}
                    alt="Close Button"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2 mt-4 uppercase">
                <span className="h2 cursor-pointer">
                  <Underline href="https://calendly.com/facudelapenna1/60min">
                    book a lesson
                  </Underline>
                </span>
                <span className="h2 cursor-pointer">
                  <Underline href="services">classes</Underline>
                </span>
                <span className="h2 cursor-pointer">
                  <Underline href="golf-schools">golf schools</Underline>
                </span>
                <span className="h2 cursor-pointer">
                  <Underline href="my-story">my story</Underline>
                </span>
                <span className="h2 cursor-pointer">
                  <Underline href="contact">contact</Underline>
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-x-4 mb-4">
                <a
                  href="https://www.instagram.com/facuteachesgolf/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="relative flex items-center justify-center cursor-pointer bg-white hover:scale-105 size-16 rounded-full border transition transform duration-150">
                    <Image
                      src={"/images/svg/instagram.svg"}
                      alt="Close Button"
                      width={32}
                      height={32}
                    />
                  </div>
                </a>
              </div>
              <p className="copy">
                Copyright © {new Date().getFullYear()} Facu Teaches Golf | All
                rights reserved
              </p>
              <p className="copy">Created by Maxjoy Studio</p>
            </div>
          </div>
        </div>
        <h3
          onClick={toggleTimeline}
          className="p menu-text absolute top-0 right-0 z-10 cursor-pointer text-white hover:text-black transition transform duration-300 py-1 px-4 bg-strong hover:bg-white rounded-sm"
        >
          MENU
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
