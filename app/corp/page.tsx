"use client";

import CircleButton from "@/components/anims/Circle";
import CorpHero from "@/components/hero/CorpHero";
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
    <main className="relative overflow-x-hidden bg-background">
      <div className="fixed bottom-40 right-40 z-60">
        <CircleButton text="BOOK NOW!" size="w-32 h-32" />
      </div>
      <CorpHero />
    </main>
  );
}
