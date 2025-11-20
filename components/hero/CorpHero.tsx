import Image from "next/image";
import React from "react";

const CorpHero = () => {
  return (
    <section className="h-screen w-full px-[clamp(8px,16px)]">
      <div className="relative mt-[clamp(56px,96px)]">
        <div className="relative w-full h-[clamp(200px,256px)]">
          <Image
            src={"/images/svg/FacuWhite.svg"}
            fill
            alt="Facu Logo"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CorpHero;
