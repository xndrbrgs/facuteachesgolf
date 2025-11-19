import AppearText from "../anims/AppearText";

const ImageHero = () => {
  return (
    <section className="relative h-[300vh] px-[clamp(8px,16px)] grid grid-cols-12 gap-x-4 w-full">
      <div className="fixed top-0 left-0 h-screen w-full brightness-90">
        <video
          className="size-full object-cover"
          muted
          autoPlay
          loop
          preload="none"
        >
          <source src="/video/Hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-span-12 text-center mb-8 mt-[clamp(56px,96px)] z-50">
        <div className="display text-white">
          <AppearText>FACU TEACHES GOLF</AppearText>
        </div>
        <p className="p text-white">
          Based in Orlando, FL, Facu Teaches Golf is dedicated to helping <br />{" "}
          passionate golfers of all skills levels to elevate their game.{" "}
        </p>
      </div>
    </section>
  );
};

export default ImageHero;
