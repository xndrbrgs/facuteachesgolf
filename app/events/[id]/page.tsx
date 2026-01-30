import AppearText from "@/components/anims/AppearText";
import CircleButtonAnim from "@/components/anims/CircleButton";
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

      <section className="flex flex-col md:flex-row border-y py-4 md:items-center md:justify-between space-y-3">
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Location</p>
          <h2 className="h5 font-bold">{event.location}</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Price</p>
          <h2 className="h5 font-bold">{event.price}$</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Open Spots</p>
          <h2 className="h5 font-bold">{event.spots}</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Date</p>
          <h2 className="h5 font-bold">
            {" "}
            {new Date(event.date).toLocaleString()}
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 h5">Reserve Spot</p>
          <Link
            href={event.stripeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="h5 font-bold hover:cursor-pointer hover:underline">
              Click Here
            </h2>
          </Link>
        </div>
      </section>
      <section className="pt-[clamp(16px,48px)]">
        <div className="relative h-[clamp(240px,720px)]">
          <Image
            src={event.imageUrl || "/images/default-image.jpg"}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="py-[clamp(16px,48px)]">
        <h1 className="h1 mb-4">Event Details</h1>
        <h2 className="h2">{event.description}</h2>
      </section>
      <Footer />
    </main>
  );
}
