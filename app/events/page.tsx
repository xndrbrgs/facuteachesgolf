import Link from "next/link";
import { eventsData } from "@/utils/events";
import AppearText from "@/components/anims/AppearText";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { prisma } from "@/lib/prisma";

export default async function EventsPage() {
    const events = await prisma.event.findMany({
      orderBy: { date: "asc" },
    });

  // const events = eventsData.events;

  return (
    <main className="relative bg-[#ecece9] text-black px-[clamp(16px,40px)] w-full">
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

      <div className="grid md:grid-cols-4 gap-6 pb-[clamp(32px,64px)]">
        {events.map((event: any) => (
          <div
            key={event.id}
            className="border rounded-lg p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <h2 className="h3">{event.name}</h2>

            {event.imageUrl && (
              <div className="relative w-full size-64 mt-4">
                <Image
                  src={event.imageUrl}
                  alt={event.name}
                  className="w-full object-cover"
                  fill
                />
              </div>
            )}

            <button className="border rounded px-4 py-2 mt-4 hover:bg-gray-100 duration-150 transition hover:cursor-pointer">
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
