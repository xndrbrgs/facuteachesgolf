"use client";

import CircleButton from "@/components/anims/Circle";
import VideoSection from "@/components/gallery/VideoSection";
import CorpHero from "@/components/hero/CorpHero";
import WhoAmI from "@/components/hero/WhoAmI";
import SchoolSection from "@/components/school/SchoolSection";
import Lenis from "lenis";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="relative overflow-x-hidden bg-background text-white w-full">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,160px)] z-80">
        <CircleButton text="BOOK NOW!" />
      </div>
      <CorpHero />
      <WhoAmI />
      <SchoolSection />
      <VideoSection />
    </main>
  );
}
