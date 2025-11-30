"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ClassOption = {
  id: string;
  title: string;
  price: string;
  duration: string;
  audience: string;
  level: string;
  description: string;
  highlights?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

const CLASS_OPTIONS: ClassOption[] = [
  {
    id: "one-hour",
    title: "1-Hour Classes",
    price: "$150",
    duration: "60 minutes",
    audience: "1 Person",
    level: "All Levels",
    description:
      "Perfect your swing with personalized one-on-one instruction. These focused sessions cover fundamentals, technique refinement, and tailored practice drills to help you improve your game efficiently.",
    highlights: ["Swing fundamentals", "Tempo & rhythm", "Personalized drills"],
    ctaLabel: "Book 1-Hour",
    ctaHref: "/book?type=one-hour",
  },
  {
    id: "half-day",
    title: "Half-Day Intensive",
    price: "$450",
    duration: "3 hours",
    audience: "1–2 People",
    level: "Intermediate–Advanced",
    description:
      "Deep-dive session with video analysis and course management strategies. Ideal for players ready to make a measurable leap.",
    highlights: ["Video analysis", "Course management", "Pre-shot routine"],
    ctaLabel: "Book Half-Day",
    ctaHref: "/book?type=half-day",
  },
  {
    id: "junior",
    title: "Junior Development",
    price: "$120",
    duration: "50 minutes",
    audience: "Ages 8–16",
    level: "Beginner–Intermediate",
    description:
      "Fun, fundamentals-first approach designed for young golfers. Build confidence, coordination, and a love for the game.",
    highlights: [
      "Foundations & fun",
      "Coordination drills",
      "Confidence building",
    ],
    ctaLabel: "Book Junior",
    ctaHref: "/book?type=junior",
  },
  {
    id: "on-course",
    title: "On-Course Strategy",
    price: "$220",
    duration: "9 holes",
    audience: "1 Person",
    level: "All Levels",
    description:
      "Real-time course strategy coaching: club selection, shot shaping, recovery decisions, and mental approach.",
    highlights: ["Club selection", "Shot shaping", "Recovery decisions"],
    ctaLabel: "Book On-Course",
    ctaHref: "/book?type=on-course",
  },
];

export default function ClassesSwiper() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className="w-full bg-[#ecece9] text-black">
      <div className="py-[clamp(56px,96px)] px-[clamp(16px,40px)]">
        <header className="mb-6">
          <h1 className="h1 uppercase mb-1">Classes List</h1>
          <p className="p text-sm opacity-70">
            Choose a class to view details and book.
          </p>
        </header>

        <Swiper
          direction={"horizontal"}
          breakpoints={{
            1024: {
              direction: "horizontal",
              slidesPerView: "auto",
              freeMode: true,
            },
          }}
          slidesPerView={"auto"}
          spaceBetween={16}
          freeMode={{ enabled: true }}
          mousewheel={{ enabled: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{ enabled: true }}
          modules={[FreeMode, Mousewheel, Pagination, Navigation]}
          className="!overflow-visible"
        >
          {CLASS_OPTIONS.map((opt) => {
            const isExpanded = expandedId === opt.id;

            return (
              <SwiperSlide key={opt.id} className="!h-auto">
                <article className="rounded-lg border bg-white/90 backdrop-blur-sm border-black/10 hover:border-black/20 transition-colors">
                  <div className="w-full text-left p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="h3 uppercase">{opt.title}</h3>
                        <p className="p mt-2 text-sm">{opt.description}</p>
                      </div>
                    </div>

                    {/* Facts */}
                    <div className="pt-6 flex flex-col gap-2 max-w-md">
                      <div className="flex items-center justify-between">
                        <p className="p font-bold">Pricing:</p>
                        <p className="p">{opt.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="p uppercase font-bold">Duration:</p>
                        <p className="p">{opt.duration}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="p uppercase font-bold">Classes for:</p>
                        <p className="p">{opt.audience}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="p uppercase font-bold">Skill Level:</p>
                        <p className="p">{opt.level}</p>
                      </div>
                    </div>

                    {/* Highlights accordion */}
                    {opt.highlights?.length ? (
                      <div className="mt-6">
                        <button
                          onClick={() => toggleExpand(opt.id)}
                          className="p inline-flex items-center gap-2 font-semibold uppercase tracking-wide"
                          aria-expanded={isExpanded}
                          aria-controls={`details-${opt.id}`}
                        >
                          {isExpanded ? "Hide details" : "Show details"}
                          <span
                            className={[
                              "inline-block transition-transform",
                              isExpanded ? "rotate-180" : "rotate-0",
                            ].join(" ")}
                          >
                            ▾
                          </span>
                        </button>
                        <div
                          id={`details-${opt.id}`}
                          className={[
                            "overflow-hidden transition-[max-height,opacity] duration-300",
                            isExpanded
                              ? "max-h-64 opacity-100"
                              : "max-h-0 opacity-0",
                          ].join(" ")}
                        >
                          <ul className="mt-3 list-disc pl-5 space-y-1">
                            {opt.highlights.map((h, i) => (
                              <li key={i} className="p text-sm">
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : null}

                    {/* Book Now CTA */}
                    {opt.ctaHref && (
                      <div className="mt-8">
                        <a
                          href={opt.ctaHref}
                          className="rounded-md border border-black bg-black text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
                        >
                          {opt.ctaLabel ?? "Book Now"}
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
