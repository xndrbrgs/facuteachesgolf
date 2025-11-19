import Image from "next/image";
import AppearText from "../anims/AppearText";

const ImageHero = () => {
  return (
    <section className="relative h-[300vh] px-[clamp(8px,16px)] w-full">
      <div className="grid grid-cols-12 gap-x-4 w-full">
        <div className="fixed top-0 left-0 h-screen w-full flex brightness-90">
          <video
            className="flex-1 h-full object-cover"
            muted
            autoPlay
            loop
            preload="none"
          >
            <source src="/video/Hero.webm" type="video/webm" />
          </video>
          <video
            className="flex-1 h-full object-cover"
            muted
            autoPlay
            loop
            preload="none"
          >
            <source src="/video/FacuInv.m4v" type="video/mp4" />
          </video>
          <video
            className="flex-1 h-full object-cover"
            muted
            autoPlay
            loop
            preload="none"
          >
            <source src="/video/Rio.m4v" type="video/mp4" />
          </video>
        </div>
        <div className="col-span-12 text-center mb-8 mt-[clamp(56px,96px)] z-50">
          <div className="display text-white">
            <AppearText>FACU TEACHES GOLF</AppearText>
          </div>
          <p className="p text-white">
            Based in Orlando, FL, Facu Teaches Golf is dedicated to helping{" "}
            <br /> passionate golfers of all skills levels to elevate their
            game.{" "}
          </p>
        </div>
        <div className="md:col-start-1 md:col-end-4 w-full  rounded-xl overflow-hidden md:h-[clamp(200px,560px)] h-full">
          <video
            width="1080"
            height="1080"
            autoPlay
            muted
            loop
            preload="none"
            className="brightness-75"
          >
            <source src="/video/FacuInv.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative col-start-4 col-end-7 w-full rounded-xl overflow-hidden hidden md:block md:h-[clamp(200px,560px)]">
          <Image
            src={"/images/FacuSwing.webp"}
            alt="Facu swing image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="col-start-7 col-end-10 w-full  rounded-xl overflow-hidden hidden md:block md:h-[clamp(200px,560px)]">
          <video
            width="1080"
            height="1080"
            autoPlay
            muted
            loop
            preload="none"
            className="brightness-75"
          >
            <source src="/video/Rio.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative col-start-10 col-end-13 w-full  rounded-xl overflow-hidden hidden md:block md:h-[clamp(200px,560px)]">
          <Image
            src={"/images/Hero.webp"}
            alt="Hero image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageHero;
