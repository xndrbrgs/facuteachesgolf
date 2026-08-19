"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const LandingQuestions = () => {
  const faqs = [
    {
      question: "Who is this program for?",
      answer:
        "Amateur golfers who want a structured way to improve their swing, practice, short game, and course performance.",
    },
    {
      question: "Do I need a simulator?",
      answer:
        "No. The program is designed around drills, a normal range, at-home work, and playing.",
    },
    {
      question: "How much time do I need?",
      answer:
        "Most sessions can be completed in about 30–50 minutes, with shorter at-home options available.",
    },
    {
      question: "How does swing feedback work?",
      answer:
        "You upload face-on and down-the-line videos. Your selected coaching plan includes personalized feedback and practice priorities.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const innerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useLayoutEffect(() => {
    faqs.forEach((_, index) => {
      const content = contentRefs.current[index];
      const inner = innerRefs.current[index];
      const icon = iconRefs.current[index];
      if (!content || !inner || !icon) return;

      const isOpen = openIndex === index;
      const height = isOpen ? inner.offsetHeight : 0;

      gsap.to(content, {
        height,
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.to(inner, {
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : -8,
        duration: 0.4,
        ease: "power2.out",
        delay: isOpen ? 0.1 : 0,
      });

      gsap.to(icon, {
        rotate: isOpen ? 45 : 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  return (
    <section className="relative w-full px-[clamp(16px,40px)] my-[clamp(64px,140px)]">
      <div className="uppercase text-accent">FAQ</div>
      <div className="h4">You have questions? We have answers.</div>
      <div className="grid grid-cols-12 gap-6 w-full pt-[40px]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="col-span-12 bg-background border-[#26302b] border rounded-xl text-left h-full"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                aria-expanded={isOpen}
              >
                <p className="text-accent uppercase">{faq.question}</p>
                <div
                  ref={(el) => {
                    iconRefs.current[index] = el;
                  }}
                  className="shrink-0 relative w-5 h-5"
                >
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-accent -translate-y-1/2" />
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-accent -translate-y-1/2 rotate-90" />
                </div>
              </button>

              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="h-0 overflow-hidden"
              >
                <div
                  ref={(el) => {
                    innerRefs.current[index] = el;
                  }}
                  className="px-6 pb-6 opacity-0 -translate-y-2"
                >
                  <p className="p">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LandingQuestions;