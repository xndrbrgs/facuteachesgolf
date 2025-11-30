"use client";

import CircleButtonAnim from "@/components/anims/CircleButton";
import FacuLogo from "@/components/anims/FacuLogo";
import ClassHero from "@/components/classes/ClassHero";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <main className="relative overflow-x-hidden w-full text-white">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,80px)] z-80">
        <CircleButtonAnim text="Click Here To Book Now!" />
      </div>
      <ClassHero />
      <Footer />
    </main>
  );
};

export default ServicesPage;
