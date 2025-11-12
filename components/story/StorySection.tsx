import Image from "next/image";

const StorySection = () => {
  return (
    <section className="px-[clamp(8px,16px)] grid grid-cols-12 gap-x-4 w-full mt-8">
      <div className="flex flex-col items-end col-span-6 gap-4">
        <div className="relative w-full h-[clamp(200px,860px)]">
          <Image
            src={"/images/LPGA.webp"}
            fill
            alt="LPGA"
            className="object-cover"
          />
        </div>
        <p className="p">Danielle Kang, LPGA</p>
      </div>
      <div className="col-span-6">
        <p className="p">
          With a background of working alongside some of the world’s best
          players, our coach brings a wealth of knowledge and experience to each
          session. Our mission is to provide personalized plans and attainable
          goals, ensuring every student sees measurable improvement.
        </p>
        <p className="p mt-8">
          Whether you’re a beginner or an experienced player, our diverse range
          of services, including individual coaching, group sessions, and course
          management, is designed to meet your unique needs. Join us and embark
          on a journey to unlock your full golf potential.
        </p>
      </div>
      <div className="col-span-6 mt-16">
        <p className="p">
          I specialize in helping fully committed golfers to play better and
          have more fun on the golf course. Before, you had to drive to the golf
          coach, losing time during the day. Now, you can improve your game
          while enjoying time with your close ones, anywhere you are. You bring
          the commitment and I'll bring the clarity.
        </p>
      </div>
      <div className="flex flex-col items-start col-span-6 gap-4 mt-16">
        <div className="relative w-full h-[clamp(200px,860px)]">
          <Image
            src={"/images/PGA.webp"}
            fill
            alt="LPGA"
            className="object-cover"
          />
        </div>
        <p className="p">Emilio Gonzalez, PGA</p>
      </div>
    </section>
  );
};

export default StorySection;
