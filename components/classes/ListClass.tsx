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

export const CLASS_OPTIONS: ClassOption[] = [
  {
    id: "one-hour",
    title: "1-Hour Classes",
    price: "$150",
    duration: "60 minutes",
    audience: "1 Person",
    level: "All Levels",
    description:
      "Focused one-on-one session to quickly diagnose and improve key aspects of your swing. We’ll address setup, tempo, and contact with tailored drills you can take to the range immediately.",
    highlights: ["Swing fundamentals", "Tempo & rhythm", "Personalized drills"],
    ctaLabel: "Book 1-Hour",
    ctaHref: "https://calendly.com/facudelapenna1/60min",
  },
  {
    id: "1-day-clinic",
    title: "1-Day Clinic",
    price: "$500-$2000",
    duration: "Full Day",
    audience: "1 Person",
    level: "Beginner–Advanced",
    description:
      "Comprehensive day of coaching that blends on-range work, video analysis, and course management. Ideal for making measurable progress in a short timeframe with structured, goal-based training.",
    highlights: [
      "Video analysis & feedback",
      "Full-swing & short-game blocks",
      "Course strategy & decision-making",
      "Personalized practice plan",
    ],
    ctaLabel: "Book Advanced Clinic",
    ctaHref: "/book?type=advanced-clinic",
  },
  {
    id: "3-day-clinic",
    title: "Advanced 3-Day Clinic",
    price: "$1000-$5000",
    duration: "Full Day",
    audience: "3–4 People",
    level: "Intermediate–Advanced",
    description:
      "Immersive multi-day program designed to build consistency under pressure. We’ll progress from fundamentals to advanced shot-shaping, incorporate on-course evaluations, and lock in routines that travel.",
    highlights: [
      "Progressive skill development",
      "Advanced shot-shaping",
      "On-course evaluations",
      "Tournament-ready routines",
    ],
    ctaLabel: "Book Advanced Clinic",
    ctaHref: "/book?type=advanced-clinic",
  },
  {
    id: "group-clinic",
    title: "Group Classes",
    price: "Inquire for pricing",
    duration: "1–2 Hours",
    audience: "2–4 People",
    level: "All Levels",
    description:
      "Collaborative group session that covers shared fundamentals and individualized tips. Great for pairs or small groups looking to learn together and get actionable takeaways for practice.",
    highlights: [
      "Shared fundamentals",
      "Individualized pointers",
      "Drill stations",
      "Q&A and practice plans",
    ],
    ctaLabel: "Book Group Class",
    ctaHref: "/book?type=group-clinic",
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
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
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
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{ enabled: true }}
              modules={[FreeMode, Mousewheel, Pagination, Navigation]}
              className="overflow-visible!"
            >
              {CLASS_OPTIONS.map((opt) => {
                const isExpanded = expandedId === opt.id;

                return (
                  <SwiperSlide key={opt.id} className="h-auto!">
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
                            <p className="p uppercase font-bold">
                              Classes for:
                            </p>
                            <p className="p">{opt.audience}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="p uppercase font-bold">
                              Skill Level:
                            </p>
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
        </div>
      </div>
    </section>
  );
}
