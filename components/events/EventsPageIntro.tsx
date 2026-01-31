"use client";

import { useGSAP } from "@gsap/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EventsPageIntro = ({ events }: any) => {
  // const sectionRef = useRef<HTMLDivElement | null>(null);

  // useGSAP(
  //   () => {
  //     // Animate each child element within the section on page load
  //     const elements = sectionRef.current?.querySelectorAll("div") || [];
  //     elements.forEach((el, index) => {
  //       gsap.fromTo(
  //         el,
  //         {
  //           autoAlpha: 0,
  //           y: 50, // Start slightly below
  //         },
  //         {
  //           autoAlpha: 1,
  //           y: 0, // Move to original position
  //           duration: 1,
  //         }
  //       );
  //     });
  //   },
  //   { scope: sectionRef }
  // );
  return (
    <div className="grid md:grid-cols-3 gap-6 pb-[clamp(32px,64px)]">
      {events.map((event: any) => (
        <div
          key={event.id}
          className="relative border p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
        >
          <h2 className="h2">{event.title}</h2>

          {event.imageUrl && (
            <div className="relative w-full h-90 mt-4 overflow-hidden">
              <div className="absolute w-full h-90 inset-0 hover:scale-105 transition transform duration-500">
                <Image
                  src={event.imageUrl}
                  alt={event.id}
                  className="w-full object-cover"
                  fill
                />
              </div>
            </div>
          )}

          <Link href={`/events/${event.id}`}>
            <button className="border rounded px-4 py-2 mt-4 hover:bg-black hover:text-white duration-300 transition hover:cursor-pointer w-full">
              <span className="text-sm">Click Here to View</span>
            </button>
          </Link>

          <p className="text-gray-500 mt-4 text-end text-xs">
            {new Date(event.date).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EventsPageIntro;
