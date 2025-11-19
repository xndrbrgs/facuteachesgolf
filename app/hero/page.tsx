"use client";

import CircleButton from "@/components/anims/Circle";
import ImageHero from "@/components/hero/ImageHero";
import Navbar from "@/components/navbar/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
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
    <main className="relative overflow-x-hidden">
      <div className="fixed bottom-30 right-40 z-60">
        <CircleButton text="BOOK NOW!" size="w-32 h-32" />
      </div>
      <ImageHero />
    </main>
  );
}
