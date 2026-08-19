import AppearText from "@/components/anims/AppearText";
import CircleButtonAnim from "@/components/anims/CircleButton";
import EventAnims from "@/components/events/EventAnims";
import Footer from "@/components/footer/Footer";
import { prisma } from "@/lib/prisma";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

export default async function EventPage({ params }: Props) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: { slug: id },
  });

  if (!event) return notFound();

  return (
    <main className="relative overflow-x-hidden bg-[#ecece9] text-black px-[clamp(16px,40px)] w-full min-h-screen">
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
      <div className="py-[clamp(8px,16px)]">
        <Link href="/events" className="underline hover:opacity-70">
          <span className="p">← Back to events</span>
        </Link>
      </div>
      <div className="py-[clamp(16px,48px)]">
        <h1 className="display">
          <AppearText>{event.title}</AppearText>
        </h1>
      </div>

      <EventAnims event={event} />
      <Footer />
    </main>
  );
}
