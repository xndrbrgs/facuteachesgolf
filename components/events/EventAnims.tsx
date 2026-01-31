"use client";

import { useGSAP } from "@gsap/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  event: {
    id: string;
    price: string;
    title: string;
    description: string;
    location: string;
    spots: string;
    date: string;
    stripeLink: string;
    imageUrl: string | null;
  };
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function EventAnims({ event }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Animate each child element within the section as they scroll into view
      const elements = sectionRef.current?.querySelectorAll("div") || [];
      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50, // Start slightly below
          },
          {
            autoAlpha: 1,
            y: 0, // Move to original position
            duration: 0.5,
            delay: index * 0.2, // Stagger animations
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // Start animation when element is 80% in viewport
              end: "top 50%", // End animation when element is 50% in viewport
              toggleActions: "play none none reverse", // Play animation on scroll
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef}>
      <section className="flex flex-col md:flex-row border-y py-4 md:items-center md:justify-between space-y-3">
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Location</p>
          <h2 className="h5 font-bold">{event.location}</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Price</p>
          <h2 className="h5 font-bold">{event.price}$</h2>
        </div>
        {/* <div className="flex flex-col">
          <p className="text-gray-700 h5">Open Spots</p>
          <h2 className="h5 font-bold">{event.spots}</h2>
        </div> */}
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Date</p>
          <h2 className="h5 font-bold">
            {" "}
            {new Date(event.date).toLocaleString()}
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Reserve Spot</p>
          <Link
            href={event.stripeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border rounded-md px-2 py-1 hover:bg-white hover:text-black bg-black text-white duration-300 transition w-max">
              <h2 className="h5 font-bold hover:cursor-pointer">Click Here</h2>
            </div>
          </Link>
        </div>
      </section>
      <section className="pt-[clamp(16px,48px)]">
        <div className="relative h-[clamp(240px,720px)] invisible">
          <Image
            src={event.imageUrl || "/images/default-image.jpg"}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="py-[clamp(36px,48px)]">
        <h1 className="h1 mb-4">Event Details</h1>
        <h2 className="h2-alt">{event.description}</h2>
      </section>
    </div>
  );
}
