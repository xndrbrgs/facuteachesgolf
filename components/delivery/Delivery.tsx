import Image from "next/image";
import CounterUp from "../anims/CounterUp";
import ImageParallax from "../anims/ImageParallax";
import FadeSwiper from "../anims/Swiper";

const Delivery = () => {
  return (
    <section className="relative w-full my-[clamp(80px,120px)] px-[clamp(16px,40px)]">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <h1 className="h1">
          {" "}
          What We've <br />
          Delivered
        </h1>
        <p className="p md:self-end md:text-end pt-4 md:pt-0">
          From fundamentals to full-course <br /> strategy — here’s how we help{" "}
          <br />
          you win on and off the green.
        </p>
      </div>
      <div className="border-t border-[#c3c3bb26] mt-[clamp(60px,120px)]">
        <div className="grid grid-cols-12 pt-[clamp(16px,32px)] gap-[clamp(16px,32px)] uppercase">
          <div className="col-span-12 md:col-span-4 rounded-md bg-[#1f1f1f] p-6">
            <div className="flex flex-col gap-y-7">
              <div className="flex flex-col gap-y-1">
                <p className="p">teaching strength</p>
                <p className="p text-[#c3c3bbb3]">
                  Empowering students with the skills and strategies to excel
                  both on and off the course.
                </p>
              </div>
              <div className="text-end self-end mt-[clamp(40px,148px)]">
                <h2 className="h3">
                  {" "}
                  <CounterUp target={500} duration={2} />+ students
                </h2>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 md:col-span-4 rounded-md bg-[#1f1f1f] p-6 overflow-hidden">
            <div className="flex flex-col gap-y-7">
              <div className="flex flex-col gap-y-1 z-10">
                <p className="p">growing the game</p>
                <p className="p text-[#dbdbd4b3]">
                  Connecting with students all over the world via Instagram
                  reels and Skillest lessons.
                </p>
              </div>
              <div className="text-end self-end mt-[clamp(40px,148px)] z-10">
                <h2 className="h3">
                  <CounterUp target={19} duration={2} />K Followers
                </h2>
              </div>
            </div>
            <ImageParallax
              src={"/images/Students.webp"}
              className="brightness-45"
            />
          </div>
          <div className="col-span-12 md:col-span-4 rounded-md bg-[#1f1f1f] p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-y-7">
              <div className="flex flex-col gap-y-1">
                <p className="p">training with the best</p>
                <p className="p text-[#c3c3bbb3]">
                  Sponsored by the best golf instructional products, ensuring
                  top-tier training and resources for every golfer.
                </p>
              </div>
            </div>
            <div className="relative flex mt-[clamp(40px,148px)]">
              <div className="w-1/2" />
              <FadeSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
