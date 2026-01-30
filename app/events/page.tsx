import AppearText from "@/components/anims/AppearText";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import CircleButtonAnim from "@/components/anims/CircleButton";
import { prisma } from "@/lib/prisma";
import { Link } from "next-view-transitions";
import EventsPageIntro from "@/components/events/EventsPageIntro";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <main className="relative overflow-x-hidden bg-[#ecece9] text-black px-[clamp(16px,40px)] w-full">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,80px)] z-80">
        <CircleButtonAnim text="Click Here To Book Now!" />
      </div>
      <div className="relative size-10 md:size-20  pt-[clamp(16px,40px)]">
        <Image
          src={"/images/svg/FACUCIRCLEBlack.svg"}
          fill
          alt="Facu Logo Large Watermark"
          className="object-contain"
        />
      </div>
      <div className="py-[clamp(16px,48px)]">
        <h1 className="display">
          <AppearText>
            Upcoming <br className="md:hidden block" /> Events
          </AppearText>
        </h1>
      </div>

      <EventsPageIntro events={events} />
      <Footer />
    </main>
  );
}
