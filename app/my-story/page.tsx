"use client";

import AppearText from "@/components/anims/AppearText";
import CircleButton from "@/components/anims/Circle";
import Navbar from "@/components/navbar/Navbar";
import StorySection from "@/components/story/StorySection";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

const MyStoryPage = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <main className="relative w-full h-screen overflow-x-hidden">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Navbar />
      <section className="px-[clamp(8px,16px)] grid grid-cols-12 gap-x-4 w-full">
        <div className="col-span-12 display">
          <AppearText>Facundo Delapenna</AppearText>
        </div>
      </section>
      <StorySection />
      <div className="absolute top-40 right-40">
        <CircleButton text="BOOK NOW!" size="w-32 h-32" />
      </div>
    </main>
  );
};

export default MyStoryPage;
