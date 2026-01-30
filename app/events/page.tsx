import AppearText from "@/components/anims/AppearText";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import CircleButtonAnim from "@/components/anims/CircleButton";
import { prisma } from "@/lib/prisma";
import { Link } from "next-view-transitions";

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

      <div className="grid md:grid-cols-3 gap-6 pb-[clamp(32px,64px)]">
        {events.map((event: any) => (
          <div
            key={event.id}
            className="relative border p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <h2 className="h2">{event.title}</h2>

            {event.imageUrl && (
              <div className="relative w-full h-90 mt-4 overflow-hidden">
                <div className="absolute w-full h-90 inset-0 hover:scale-105 transition transform duration-500">
                  <Image
                    src={event.imageUrl}
                    alt={event.id}
                    className="w-full object-cover"
                    fill
                  />
                </div>
              </div>
            )}

            <button className="border rounded px-4 py-2 mt-4 hover:bg-black hover:text-white duration-300 transition hover:cursor-pointer">
              <Link href={`/events/${event.id}`}>
                <span className="text-sm">Click Here to View</span>
              </Link>
            </button>

            <p className="text-gray-500 mt-4 text-end text-xs">
              {new Date(event.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
