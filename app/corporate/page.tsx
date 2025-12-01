"use client";

import CircleButtonAnim from "@/components/anims/CircleButton";
import CorpHero from "@/components/corp/CorpHero";
import WhatMakesUs from "@/components/corp/WhatMakesUs";
import Footer from "@/components/footer/Footer";

const CorporatePage = () => {
  return (
    <main className="relative overflow-x-hidden w-full">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,80px)] z-80">
        <CircleButtonAnim text="Click Here To Book Now!" />
      </div>
      <CorpHero />
      <WhatMakesUs />
      <Footer />
    </main>
  );
};

export default CorporatePage;
