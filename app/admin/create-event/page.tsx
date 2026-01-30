import CreateEventForm from "@/components/admin/CreateEventForm";
import AppearText from "@/components/anims/AppearText";
import Footer from "@/components/footer/Footer";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AdminEventsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/admin");

  return (
    <main className="relative bg-[#ecece9] text-black px-[clamp(16px,40px)] w-full">
      <div className="flex w-full  space-x-5 items-center">
        <div className="relative size-10 md:size-20  pt-[clamp(16px,40px)]">
          <Image
            src={"/images/svg/FACUCIRCLEBlack.svg"}
            fill
            alt="Facu Logo Large Watermark"
            className="object-contain"
          />
        </div>
        <div className="flex items-center space-x-4">
          <UserButton />
          <span className="text-sm">Click on picture to access account</span>
        </div>
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
      <Footer />
    </main>
  );
}
