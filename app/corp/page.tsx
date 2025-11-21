"use client";

import CircleButton from "@/components/anims/Circle";
import CorpHero from "@/components/hero/CorpHero";
import WhoAmI from "@/components/hero/WhoAmI";
import Lenis from "lenis";
import { useEffect } from "react";

export default function CorpPage() {
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
    <main className="relative overflow-x-hidden bg-background text-white px-[clamp(16px,40px)]">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,160px)] z-90">
        <CircleButton text="BOOK NOW!" />
      </div>
      <CorpHero />
      <WhoAmI />
    </main>
  );
}
