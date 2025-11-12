import Image from "next/image";
import AppearText from "../anims/AppearText";

const Hero = () => {
  return (
    <section className="px-[clamp(8px,16px)] grid grid-cols-12 gap-x-4 w-full">
      <div className="col-span-12 mb-8">
        <div className="display">
          <AppearText>FACU TEACHES GOLF</AppearText>
        </div>
        <p className="p">
          Based in Orlando, FL, Facu Teaches Golf is dedicated to helping <br />{" "}
          passionate golfers of all skills levels to elevate their game.{" "}
        </p>
      </div>
      <div className="md:col-start-1 md:col-end-4 col-span-12 w-full border rounded-xl overflow-hidden md:h-[clamp(200px,560px)] h-full">
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
      <div className="relative col-start-4 col-end-7 w-full border rounded-xl overflow-hidden hidden md:block md:h-[clamp(200px,560px)]">
        <Image src={"/images/FacuSwing.webp"} alt="Facu swing image" fill />
      </div>
      <div className="col-start-7 col-end-10 w-full border rounded-xl overflow-hidden hidden md:block md:h-[clamp(200px,560px)]">
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
      <div className="relative col-start-10 col-end-13 w-full border rounded-xl overflow-hidden hidden md:block md:h-[clamp(200px,560px)]">
        <Image src={"/images/Hero.webp"} alt="Hero image" fill />
      </div>
    </section>
  );
};

export default Hero;
