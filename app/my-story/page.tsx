"use client";

import AppearText from "@/components/anims/AppearText";
import CircleButton from "@/components/anims/Circle";
import Navbar from "@/components/navbar/Navbar";
import StorySection from "@/components/story/StorySection";
import Lenis from "lenis";
import { useEffect } from "react";

const MyStoryPage = () => {
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
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <section className="px-[clamp(8px,16px)] grid grid-cols-12 gap-x-4 w-full">
        <div className="col-span-12 display">
          <AppearText>Facundo Delapenna</AppearText>
        </div>
      </section>
      <StorySection />
      <div className="absolute top-30 right-40">
        <CircleButton text="BOOK NOW!" size="w-32 h-32" />
      </div>
    </main>
  );
};

export default MyStoryPage;
