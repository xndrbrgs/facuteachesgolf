"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function FadeSwiper() {
  const images = ["/images/svg/StanceCaddy.svg", "/images/svg/FullWedge.svg"];

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 1500 }}
      loop
      spaceBetween={30}
      className="h-16 w-1/2 self-end"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i} className="relative w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              className="object-cover size-64" // or object-cover
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
