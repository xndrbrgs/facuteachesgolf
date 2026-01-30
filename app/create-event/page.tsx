import CreateEventForm from "@/components/admin/CreateEventForm";
import DeleteEvents from "@/components/admin/DeleteEvents";
import AppearText from "@/components/anims/AppearText";
import Footer from "@/components/footer/Footer";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/server/user.actions";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AdminEventsPage() {
  const user = await isAdmin();

  if (!user) {
    return redirect("/");
  }

  // const events = (
  //   await prisma.event.findMany({
  //     select: { id: true, title: true, slug: true },
  //     orderBy: { date: "asc" },
  //   })
  // ).map((event) => ({
  //   id: event.id,
  //   name: event.title, // Map 'title' to 'name'
  //   slug: event.slug,
  // }));

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
            Create <br className="md:hidden block" /> Events
          </AppearText>
        </h1>
      </div>
      <div className="py-[clamp(16px,48px)]">
        <CreateEventForm />
      </div>
      {/* <div className="py-[clamp(16px,48px)]">
        <h1 className="display">
          <AppearText>
            Delete <br className="md:hidden block" /> Events
          </AppearText>
        </h1>
      </div>
      <div className="py-[clamp(16px,48px)]">
        <DeleteEvents events={events} />
      </div> */}
      <Footer />
    </main>
  );
}
